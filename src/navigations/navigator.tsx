// imports
import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'

import routes from './routes'
import { NotFound } from '../views/Home'
import { Login } from '../views/Auth'
import { useAuth } from '../contexts/auth.context'
import AppRoute from './app-routes'

// main
const Navigator = (): React.ReactElement => {
	const { user } = useAuth()
	return (
		<Router>
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
			{!user && <Redirect to={{ pathname: AppRoute.LOGIN }} />}
		</Router>
	)
}

// exports
export default Navigator
