// main
interface AuthenticateResponse {
	userName: string
	email: string
	isVerified: boolean
	jwtToken: string
	expires: string
}

// exports
export default AuthenticateResponse
