// main
enum AppRoute {
	HOME = '/',
	LOGIN = '/login',
	DOCUMENTS = '/documents',
	DOCUMENT_CREATE = '/documents/new',
	DOCUMENT_SHOW = '/documents/:id(\\d+)',
	DOCUMENTS_SEARCH = '/documents/search/:search',
	DOCUMENTS_SEARCH_TYPE = '/documents/types/:type(\\d+)',
	DOCUMENTS_SEARCH_TAG = '/documents/tags/:tag',
}

// exports
export default AppRoute
