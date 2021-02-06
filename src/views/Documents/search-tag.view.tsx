// imports
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import SearchBar from '../../components/search-bar.component'
import Document from '../../models/document/document.model'
import service from '../../services/document.service'
import documentTagService from '../../services/document-tag.service'
import DocumentCard from './components/card.component'
import DocumentTag from '../../models/document-tag/document-tag.model'

// config
type SearchState = {
	documents: Document[]
	loading: boolean
}

// main
interface ParamTypes {
	tag: string
}

const SearchWithTag = (): React.ReactElement => {
	// hooks
	const { tag } = useParams<ParamTypes>()
	const [pageState, setPageState] = useState<SearchState>({
		documents: [],
		loading: true,
	})
	const [documentTag, setDocumentTag] = useState<DocumentTag>()

	// actions
	useEffect(() => {
		;(async () => {
			const docs = (await service.search({ tag })).data.result
			setPageState(() => ({
				documents: docs,
				loading: false,
			}))

			setDocumentTag(
				(await documentTagService.findBySlug(tag)).data.result
			)
		})()
	}, [tag])

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
			title={`Documents par tag "${documentTag?.name || '...'}"`}>
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
export default SearchWithTag
