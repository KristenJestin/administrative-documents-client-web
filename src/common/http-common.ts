// imports
import axios from 'axios'
import { UrlJoin } from './helpers/url.helper'

// main
const http = (version: boolean = true) =>
	axios.create({
		baseURL: UrlJoin(
			process.env.REACT_APP_API_URL,
			version ? process.env.REACT_APP_API_VERSION : ''
		),
		headers: {
			'Content-type': 'application/json',
		},
	})

// exports
export default http
