// imports
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import SearchBar from '../../components/search-bar.component'
import Document from '../../models/document/document.model'
import AppRoute from '../../navigations/app-routes'
import service from '../../services/document.service'
import DocumentCard from './components/card.component'

// config
type HomeState = {
	documents: Document[]
	loading: boolean
}

// main
const Latest = (): React.ReactElement => {
	// hooks
	const [pageState, setPageState] = useState<HomeState>({
		documents: [],
		loading: true,
	})

	// actions
	useEffect(() => {
		;(async () => {
			const docs = (await service.latest()).data.result
			setPageState(() => ({
				documents: docs,
				loading: false,
			}))
		})()
	}, [])

	// render
	return (
		<MainContainer
			title="Derniers Documents"
			right={
				<Link
					to={AppRoute.DOCUMENT_CREATE}
					className="button is-primary">
					Ajouter un document
				</Link>
			}>
			<div className="mb-6">
				<SearchBar defaultSearch="" />
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
export default Latest
