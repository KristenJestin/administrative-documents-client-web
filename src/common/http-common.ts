import { AxiosResponse } from 'axios'
// imports
import axios, { AxiosInstance } from 'axios'
import { getAuthenticateToken } from '../services/auth.service'
import {
	authCookieName,
	storeAuthenticateToken,
} from '../services/auth.service'
import { UrlJoin } from './helpers/url.helper'
import { SuccessResponse } from '../models/response.model'
import { AuthenticateResponse } from '../models/account'

// main
const http = (
	version: boolean = true,
	requireAuth: boolean = true
): AxiosInstance => {
	const instance = axios.create({
		baseURL: UrlJoin(
			process.env.REACT_APP_API_URL,
			version ? process.env.REACT_APP_API_VERSION : ''
		),
		headers: {
			'Content-type': 'application/json',
		},
	})

	if (requireAuth) {
		//request interceptor to add the auth token header to requests
		instance.interceptors.request.use(
			(config) => {
				const accessToken = getAuthenticateToken()
				if (accessToken) {
					config.headers['Authorization'] = accessToken
				}
				return config
			},
			(error) => {
				Promise.reject(error)
			}
		)

		//response interceptor to refresh token on receiving token expired error
		instance.interceptors.response.use(
			(response) => response,
			(error) => {
				const originalRequest = error.config
				let refreshToken = localStorage.getItem(authCookieName)

				if (
					refreshToken &&
					error.response.status === 401 &&
					!originalRequest._retry
				) {
					originalRequest._retry = true
					return instance
						.post(`/accounts/refresh-token`)
						.then(
							(
								response: AxiosResponse<
									SuccessResponse<AuthenticateResponse>
								>
							) => {
								if (response.status === 200) {
									const result = response.data.result
									storeAuthenticateToken({
										value: result.jwtToken,
										expires: result.expires,
									})
									console.log('Access token refreshed!')
									return axios(originalRequest)
								}
							}
						)
				}
				return Promise.reject(error)
			}
		)
	}

	return instance
}

// exports
export default http
