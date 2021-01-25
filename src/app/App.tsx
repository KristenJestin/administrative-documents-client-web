import React, { useState } from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import AlertTemplate from '../components/alert-template.component'
import { AuthContext } from '../hooks/auth.context'
import { AuthCookie } from '../models/account/auth-cookie.model'
import Navigator from '../navigations/navigator'
import {
	getAuthenticateToken,
	storeAuthenticateToken,
} from '../services/auth.service'

const App = (): React.ReactElement => {
	const [authToken, setAuthToken] = useState<AuthCookie | null>(
		getAuthenticateToken()
	)
	const setTokens = (token: AuthCookie) => {
		storeAuthenticateToken(token)
		setAuthToken(token)
	}

	return (
		<AlertProvider
			template={AlertTemplate}
			position={positions.TOP_RIGHT}
			transition={transitions.FADE}
			timeout={7500}>
			<AuthContext.Provider
				value={{ authToken, setAuthToken: setTokens }}>
				<Navigator />
			</AuthContext.Provider>
		</AlertProvider>
	)
}

export default App
