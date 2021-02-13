// imports
import { createContext, useContext } from 'react'
import { AuthCookie } from '../models/account/auth-cookie.model'

// main
type AuthContextProps = {
	authToken: AuthCookie | null
	setAuthToken: (token: AuthCookie) => void
}
const AuthContext = createContext<AuthContextProps>({
	authToken: null,
	setAuthToken: () => {},
})

const useAuth = () => useContext(AuthContext)

// exports
export { AuthContext, useAuth }
