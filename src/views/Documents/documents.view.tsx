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
		<MainContainer
			title="Derniers Documents"
			right={
				<Link
					to={AppRoute.DOCUMENT_CREATE}
					className="button is-primary">
					Ajouter un document
				</Link>
			}>
			<div>
				{pageState.loading && (
					<div className="is-center mt-6">
						<div className="loader"></div>
					</div>
				)}
				{pageState?.documents?.map((doc, index) => (
					<div key={index} className="card mb-4">
						<div className="card-content">
							<div className="media">
								<div
									className="media-left mr-5"
									style={{
										marginTop: 'auto',
										marginBottom: 'auto',
									}}>
									<i className="fas fa-file-alt fa-4x" />
								</div>
								<div className="media-content">
									<div className="content">
										<p>
											<strong className="mr-2">
												{doc.name}
											</strong>
											{doc.type && (
												<small>
													<a
														href={doc.type.id.toString()}>
														{doc.type.name}
													</a>
												</small>
											)}
											<br />
											{doc.note || <i>aucune note</i>}
										</p>
									</div>
									<nav className="level is-mobile">
										<div className="level-left">
											<div className="tags">
												{doc.tags?.map((tag, index) => (
													<a
														key={index}
														className="tag is-primary">
														{tag.name}
													</a>
												))}
											</div>
										</div>
										<div className="level-right">
											<a className="level-item button is-light">
												Afficher le dossier
											</a>
											<a className="level-item button is-link">
												Détails
											</a>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</MainContainer>
	)
}

// exports
export default Documents
