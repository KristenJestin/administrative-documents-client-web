// imports
import { AxiosResponse } from 'axios'
import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import { AuthenticateRequest, AuthenticateResponse } from '../models/account/'
import { AuthCookie } from '../models/account/auth-cookie.model'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/accounts'

// main
const authCookieName = 'token'
const authLocalStorageName = 'token'

const storeAuthenticateToken = (user: AuthCookie) =>
	localStorage.setItem(authLocalStorageName, JSON.stringify(user))

const getAuthenticateToken = (): AuthCookie | null => {
	const stored = localStorage.getItem(authLocalStorageName)
	if (stored) return JSON.parse(stored)
	return null
}

const isAuthenticated = () => getAuthenticateToken() != null

const authenticate = (
	data: AuthenticateRequest
): Promise<AxiosResponse<SuccessResponse<AuthenticateResponse>>> =>
	jsonRequest('POST', UrlJoin(url, 'authenticate'), data, false, false)

// exports
export {
	storeAuthenticateToken,
	getAuthenticateToken,
	isAuthenticated,
	authenticate,
	authCookieName,
	authLocalStorageName,
}
