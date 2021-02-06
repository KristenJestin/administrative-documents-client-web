// imports
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import SearchBar from '../../components/search-bar.component'
import Document from '../../models/document/document.model'
import service from '../../services/document.service'
import documentTypeService from '../../services/document-type.service'
import DocumentCard from './components/card.component'
import DocumentType from '../../models/document-type/document-type.model'

// config
type SearchState = {
	documents: Document[]
	loading: boolean
}

// main
interface ParamTypes {
	type: string
}

const SearchWithType = (): React.ReactElement => {
	// hooks
	const { type } = useParams<ParamTypes>()
	const [pageState, setPageState] = useState<SearchState>({
		documents: [],
		loading: true,
	})
	const [documentType, setDocumentType] = useState<DocumentType>()

	// actions
	useEffect(() => {
		;(async () => {
			const docs = (await service.search({ type: parseInt(type) })).data
				.result
			setPageState(() => ({
				documents: docs,
				loading: false,
			}))

			setDocumentType(
				(await documentTypeService.find(parseInt(type))).data.result
			)
		})()
	}, [type])

	// methods
	const renderDocuments = () => {
		const { loading, documents } = pageState

		if (!loading) {
			if (!loading && documents.length === 0) {
				return (
					<p className="has-text-grey is-italic has-text-centered">
						Aucun document trouvé
					</p>
				)
			} else {
				return documents?.map((doc, index) => (
					<DocumentCard
						key={index}
						id={doc.id}
						name={doc.name}
						note={doc.note}
						type={doc.type}
						tags={doc.tags}
					/>
				))
			}
		}
	}

	// render
	return (
		<MainContainer
			title={`Documents par type "${documentType?.name || '...'}"`}>
			<div className="mb-6">
				<SearchBar defaultSearch="" />
			</div>
			<div>
				{pageState.loading && (
					<div className="is-center mt-6">
						<div className="loader"></div>
					</div>
				)}
				{renderDocuments()}
			</div>
		</MainContainer>
	)
}

// exports
export default SearchWithType
