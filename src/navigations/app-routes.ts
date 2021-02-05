// main
enum AppRoute {
	HOME = '/',
	LOGIN = '/login',
	DOCUMENTS = '/documents',
	DOCUMENT_CREATE = '/documents/new',
	DOCUMENT_SHOW = '/documents/:id(\\d+)',
	DOCUMENTS_SEARCH = '/documents/search/:search',
}

// exports
export default AppRoute
