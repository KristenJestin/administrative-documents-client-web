// imports
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import SearchBar from '../../components/search-bar.component'
import Document from '../../models/document/document.model'
import AppRoute from '../../navigations/app-routes'
import service from '../../services/document.service'
import DocumentCard from './components/card.component'

// config
type SearchState = {
	documents: Document[]
	loading: boolean
}

// main
interface ParamTypes {
	search: string
}

const Search = (): React.ReactElement => {
	// hooks
	const history = useHistory()
	const { search } = useParams<ParamTypes>()
	const [pageState, setPageState] = useState<SearchState>({
		documents: [],
		loading: true,
	})

	// actions
	useEffect(() => {
		;(async () => {
			if (!search) {
				history.push(AppRoute.DOCUMENTS)
				return
			}

			const docs = (await service.search({ term: search })).data.result
			setPageState(() => ({
				documents: docs,
				loading: false,
			}))
		})()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	// render
	return (
		<MainContainer title={`Recherche Documents "${search}"`}>
			<div className="mb-6">
				<SearchBar defaultSearch={search} />
			</div>
			<div>
				{pageState.loading && (
					<div className="is-center mt-6">
						<div className="loader"></div>
					</div>
				)}
				{pageState?.documents?.map((doc, index) => (
					<DocumentCard
						key={index}
						id={doc.id}
						name={doc.name}
						note={doc.note}
						type={doc.type}
						tags={doc.tags}
					/>
				))}
			</div>
		</MainContainer>
	)
}

// exports
export default Search
