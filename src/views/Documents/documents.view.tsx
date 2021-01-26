// imports
import React, { useState, useEffect } from 'react'

import MainContainer from '../../components/main-container.component'
import Document from '../../models/document/document.model'
import service from '../../services/document.service'

// main
const Documents = (): React.ReactElement => {
	// hooks
	const [documents, setDocuments] = useState<Document[]>([])

	// actions
	useEffect(() => {
		;(async () => {
			const doc = await (await service.find(1)).data.result
			setDocuments((docs) => [...docs, doc])
		})()
	}, [])

	// render
	return (
		<MainContainer title="Derniers Documents">
			<div>
				{documents.map((doc, index) => (
					<div className="card mb-4">
						<div key={index} className="card-content">
							<div className="media">
								<div
									className="media-left"
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
											<small>
												<a
													href={doc.type.id.toString()}>
													{doc.type.name}
												</a>
											</small>
											<br />
											{doc.note || <i>aucune note</i>}
										</p>
									</div>
									<nav className="level is-mobile">
										<div className="level-left">
											<a className="level-item">
												<span className="icon is-small">
													<i className="fas fa-reply"></i>
												</span>
											</a>
											<a className="level-item">
												<span className="icon is-small">
													<i className="fas fa-retweet"></i>
												</span>
											</a>
											<a className="level-item">
												<span className="icon is-small">
													<i className="fas fa-heart"></i>
												</span>
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
