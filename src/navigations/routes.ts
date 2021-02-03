// imports
import { RouteComponentProps } from 'react-router-dom'
import { Home } from '../views/Home'
import { Login } from '../views/Auth'
import AppRoute from './app-routes'
import { CreateDocument, ListDocuments, ShowDocument } from '../views/Documents'

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
	{
		component: ListDocuments,
		path: AppRoute.DOCUMENTS,
		name: 'Documents',
	},
	{
		component: CreateDocument,
		path: AppRoute.DOCUMENT_CREATE,
		name: 'New Document',
	},
	{
		component: ShowDocument,
		path: AppRoute.DOCUMENT_SHOW,
		name: 'Show Document',
	},
]

// exports
export default routes
