// imports
import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom'

import routes from './routes'
import { NotFound } from '../views/Home'
import { useAuth } from '../hooks/auth.context'
import AppRoute from './app-routes'

// main
const Navigator = (): React.ReactElement => {
	// hooks
	const { authToken } = useAuth()

	// render
	return (
		<Router>
			{!authToken && <Redirect to={{ pathname: AppRoute.LOGIN }} />}
			<Switch>
				{routes.map((route) => (
					<Route
						key={route.path}
						component={route.component}
						path={route.path}
						exact
					/>
				))}
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

// exports
export default Navigator
