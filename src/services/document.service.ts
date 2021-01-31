// imports
import { AxiosResponse } from 'axios'

import { jsonRequest } from '../common/helpers/api.helper'
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

// exports
const service = { find, latest }
export default service
