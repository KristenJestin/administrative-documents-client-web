// imports
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useHistory, useParams } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import Document from '../../models/document/document.model'
import AppRoute from '../../navigations/app-routes'
import service from '../../services/document.service'

// config
type ShowState = {
	document?: Document
	loading: boolean
}

// main
interface ParamTypes {
	id: string
}

const Show = (): React.ReactElement => {
	// hooks
	const alert = useAlert()
	const history = useHistory()
	const { id } = useParams<ParamTypes>()
	const [pageState, setPageState] = useState<ShowState>({
		loading: true,
	})

	// events
	useEffect(() => {
		;(async () => {
			try {
				const doc = (await service.find(parseInt(id))).data.result
				setPageState(() => ({
					document: doc,
					loading: false,
				}))
			} catch (error) {
				alert?.error("Le document n'a pas été trouvé.")
				history.push(AppRoute.HOME)
			}
		})()
	}, [id, alert, history])

	// methods
	const renderDocument = () => {
		if (!pageState.document) return undefined

		const { document } = pageState
		return (
			<>
				<div>
					<div className="level">
						<div className="level-left">
							{document.type && (
								<small className="mb-3">
									<b>Type : </b>
									<a href={document.type.id.toString()}>
										{document.type.name}
									</a>
								</small>
							)}

							<div>
								<div className="tags">
									{/* TODO: transform to link */}
									{document.tags?.map((tag, index) => (
										<span
											key={index}
											className="tag is-primary">
											{tag.name}
										</span>
									))}
								</div>
							</div>
						</div>

						<div className="level-right"></div>
					</div>

					{document.note && (
						<div className="mt-5">
							<h4 className="title is-4 mb-0">Note</h4>
							<p>{document.note}</p>
						</div>
					)}
				</div>
			</>
		)
	}

	// render
	return (
		<MainContainer
			title={`Détails du document ${
				!pageState.loading && pageState.document
					? `"${pageState.document.name}"`
					: ''
			}`}>
			<div>
				{pageState.loading && (
					<div className="is-center mt-6">
						<div className="loader"></div>
					</div>
				)}
				{renderDocument()}
			</div>
		</MainContainer>
	)
}

// exports
export default Show
