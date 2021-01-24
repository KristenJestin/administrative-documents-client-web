// imports
import { createContext, useContext } from 'react'
import { AuthenticateResponse } from '../models/account'

// main
type AuthContextProps = {
	user: AuthenticateResponse | null
	setUser: (user: AuthenticateResponse) => void
}
const AuthContext = createContext<AuthContextProps>({
	user: null,
	setUser: () => {},
})

const useAuth = () => useContext(AuthContext)

// exports
export { AuthContext, useAuth }
