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
	http({}).request<SuccessResponse<T>>({ method, url, params })

const jsonRequest = <T>(
	method: Method,
	url: string,
	data: any = undefined,
	version: boolean = true,
	requireAuth: boolean = true
): Promise<AxiosResponse<SuccessResponse<T>>> =>
	http({ version, requireAuth }).request<SuccessResponse<T>>({
		method,
		url,
		data,
	})

const fromDataRequest = <T>(
	method: Method,
	url: string,
	data: FormData,
	version: boolean = true,
	requireAuth: boolean = true
): Promise<AxiosResponse<SuccessResponse<T>>> =>
	http({ version, requireAuth, contentType: 'multipart/form-data' }).request<
		SuccessResponse<T>
	>({
		method,
		url,
		data,
	})

const downloadRequest = <
	T extends string | ArrayBuffer | ArrayBufferView | Blob
>(
	method: Method,
	url: string,
	version: boolean = true,
	requireAuth: boolean = true
): Promise<AxiosResponse<T>> =>
	http({ version, requireAuth, responseType: 'blob' }).request<T>({
		method,
		url,
	})

// exports
export { queryRequest, jsonRequest, fromDataRequest, downloadRequest }
