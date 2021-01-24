import React, { useState } from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import AlertTemplate from '../components/alert-template.component'
import { AuthContext } from '../contexts/auth.context'
import { AuthenticateResponse } from '../models/account'
import Navigator from '../navigations/navigator'
import {
	getAuthenticateUser,
	storeAuthenticateUser,
} from '../services/auth.service'

const App = (): React.ReactElement => {
	const [user, setUser] = useState<AuthenticateResponse | null>(
		getAuthenticateUser()
	)
	const setAuthUser = (user: AuthenticateResponse) => {
		storeAuthenticateUser(user)
		setUser(user)
	}

	return (
		<AlertProvider
			template={AlertTemplate}
			position={positions.TOP_RIGHT}
			transition={transitions.FADE}
			timeout={7500}>
			<AuthContext.Provider value={{ user, setUser: setAuthUser }}>
				<Navigator />
			</AuthContext.Provider>
		</AlertProvider>
	)
}

export default App
