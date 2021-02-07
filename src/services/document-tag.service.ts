// imports
import { AxiosResponse } from 'axios'

import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import DocumentTag from '../models/document-tag/document-tag.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/document-tags'

// main
const all = (): Promise<AxiosResponse<SuccessResponse<DocumentTag[]>>> =>
	jsonRequest('GET', url)

const find = (
	id: number
): Promise<AxiosResponse<SuccessResponse<DocumentTag>>> =>
	jsonRequest('GET', UrlJoin(url, id.toString()))

const findBySlug = (
	slug: string
): Promise<AxiosResponse<SuccessResponse<DocumentTag>>> =>
	jsonRequest('GET', UrlJoin(url, slug))

// exports
const service = { all, find, findBySlug }
export default service
