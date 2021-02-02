// imports
import { AxiosResponse } from 'axios'

import { jsonRequest } from '../common/helpers/api.helper'
import DocumentType from '../models/document-type/document-type.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/document-types'

// main
const all = (): Promise<AxiosResponse<SuccessResponse<DocumentType[]>>> =>
	jsonRequest('GET', url)

// exports
const service = { all }
export default service
