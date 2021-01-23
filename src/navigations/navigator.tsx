// imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from './routes'
import { NotFound } from '../views/Home'

// main
const Navigator = (): React.ReactElement => (
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
	</Router>
)

// exports
export default Navigator
