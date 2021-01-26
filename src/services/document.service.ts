// imports
import { AxiosResponse } from 'axios'
import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import Document from '../models/document/document.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/documents'

// main
const getlast = () => null

const find = (id: number): Promise<AxiosResponse<SuccessResponse<Document>>> =>
	jsonRequest('GET', UrlJoin(url, id.toString()))

// exports
const service = { find }
export default service
