// imports
import { AxiosResponse } from 'axios'

import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import DocumentType from '../models/document-type/document-type.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/document-types'

// main
const all = (): Promise<AxiosResponse<SuccessResponse<DocumentType[]>>> =>
	jsonRequest('GET', url)

const find = (
	id: number
): Promise<AxiosResponse<SuccessResponse<DocumentType>>> =>
	jsonRequest('GET', UrlJoin(url, id.toString()))

// exports
const service = { all, find }
export default service
