// main
const authCookieName = 'token'
interface AuthCookie {
	value: string
	expires: string
}

// exports
export type { AuthCookie }
export { authCookieName }
