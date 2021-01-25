// imports
import { AxiosResponse } from 'axios'
import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import { AuthenticateRequest, AuthenticateResponse } from '../models/account/'
import { AuthCookie, authCookieName } from '../models/account/auth-cookie.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/accounts'

// main
const storeAuthenticateUser = (user: AuthCookie) =>
	localStorage.setItem(authCookieName, JSON.stringify(user))

const getAuthenticateUser = (): AuthCookie | null => {
	const stored = localStorage.getItem(authCookieName)
	if (stored) return JSON.parse(stored)
	return null
}

const isAuthenticated = () => getAuthenticateUser() != null

const authenticate = (
	data: AuthenticateRequest
): Promise<AxiosResponse<SuccessResponse<AuthenticateResponse>>> =>
	jsonRequest('POST', UrlJoin(url, 'authenticate'), data, false, false)

// exports
export {
	storeAuthenticateUser,
	getAuthenticateUser,
	isAuthenticated,
	authenticate,
}
