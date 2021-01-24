// imports
import { Method, AxiosResponse } from 'axios'
import { SuccessResponse } from '../../models/response.model'
import http from '../http-common'

// main
const queryRequest = <T>(
	method: Method,
	url: string,
	params: any
): Promise<AxiosResponse<SuccessResponse<T>>> =>
	http().request<SuccessResponse<T>>({ method, url, params })

const jsonRequest = <T>(
	method: Method,
	url: string,
	data: any,
	version: boolean = true,
	requireAuth: boolean = true
): Promise<AxiosResponse<SuccessResponse<T>>> =>
	http(version, requireAuth).request<SuccessResponse<T>>({
		method,
		url,
		data,
	})

// exports
export { queryRequest, jsonRequest }
