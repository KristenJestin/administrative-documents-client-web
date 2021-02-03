// imports
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import Document from '../../models/document/document.model'
import AppRoute from '../../navigations/app-routes'
import service from '../../services/document.service'

// config
type DocumentsState = {
	documents: Document[]
	loading: boolean
}

// main
const Documents = (): React.ReactElement => {
	// hooks
	const [pageState, setPageState] = useState<DocumentsState>({
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
		<MainContainer title="Tous les Documents">
			<h2>DOCUMENTS</h2>
		</MainContainer>
	)
}

// exports
export default Documents
