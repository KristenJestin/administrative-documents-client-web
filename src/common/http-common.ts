// imports
import axios, { AxiosInstance } from 'axios'
import { UrlJoin } from './helpers/url.helper'

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
		// instance.interceptors.
	}

	return instance
}

// exports
export default http
