// imports
import { AxiosResponse } from 'axios'
import { jsonRequest } from '../common/helpers/api.helper'
import { UrlJoin } from '../common/helpers/url.helper'
import { AuthenticateRequest, AuthenticateResponse } from '../models/account/'
import { SuccessResponse } from '../models/response.model'

// config
const url = '/accounts'
const localStorageItemName = 'user'

// main
const storeAuthenticateUser = (user: AuthenticateResponse) =>
	localStorage.setItem(localStorageItemName, JSON.stringify(user))

const getAuthenticateUser = (): AuthenticateResponse | null => {
	const stored = localStorage.getItem(localStorageItemName)
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
