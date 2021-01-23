// imports
import { RouteComponentProps } from 'react-router-dom'
import { Home } from '../views/Home'
import { Login } from '../views/Auth'
import AppRoute from './app-routes'

// main
type RouteProps = {
	component: // eslint-disable-next-line @typescript-eslint/no-explicit-any
	React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
	path: string
	name: string
}

const routes: RouteProps[] = [
	{
		component: Home,
		path: AppRoute.HOME,
		name: 'Home',
	},
	{
		component: Login,
		path: AppRoute.LOGIN,
		name: 'Login',
	},
]

// exports
export default routes
