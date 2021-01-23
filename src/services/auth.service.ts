// imports
import { AxiosResponse } from 'axios'
import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import { AuthenticateRequest, AuthenticateResponse } from '../models/account/'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/accounts'

// main
const authenticate = (
	data: AuthenticateRequest
): Promise<AxiosResponse<SuccessResponse<AuthenticateResponse>>> =>
	jsonRequest('POST', UrlJoin(url, 'authenticate'), data, false)

// exports
export { authenticate }
