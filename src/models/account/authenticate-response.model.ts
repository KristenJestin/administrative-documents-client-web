// main
interface AuthenticateResponse {
	userName: string
	email: string
	isVerified: boolean
	jwtToken: string
}

// exports
export default AuthenticateResponse
