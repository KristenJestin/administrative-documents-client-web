// imports
import { AxiosResponse } from 'axios'

import {
	fromDataRequest,
	jsonRequest,
	downloadRequest,
} from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import Document from '../models/document/document.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/documents'

// main
const find = (id: number): Promise<AxiosResponse<SuccessResponse<Document>>> =>
	jsonRequest('GET', UrlJoin(url, id.toString()))

const latest = (): Promise<AxiosResponse<SuccessResponse<Document[]>>> =>
	jsonRequest('GET', UrlJoin(url, 'latest'))

const create = (
	data: FormData
): Promise<AxiosResponse<SuccessResponse<Document>>> =>
	fromDataRequest('POST', url, data)

const download = (id: number): Promise<AxiosResponse<Blob>> =>
	downloadRequest('GET', UrlJoin(url, id.toString(), 'download'))

// exports
const service = { find, latest, create, download }
export default service
