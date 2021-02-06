// imports
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Link, useHistory, useParams } from 'react-router-dom'
import fileDownload from 'js-file-download'

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
	const download = async () => {
		if (pageState.document && pageState.document.file) {
			const { document } = pageState
			const response = await service.download(document.id)

			fileDownload(
				response.data,
				`${document.name}${document.file.extension}`
			)
		} else {
			alert.error(
				'Une erreur est survenue lors de la génération du fichier.'
			)
		}
	}

	const renderDocument = () => {
		if (!pageState.document) return undefined

		const { document } = pageState
		return (
			<>
				<div>
					<div className="level">
						<div className="level-left is-flex-direction-column is-align-items-flex-start">
							<div className="mb-3">
								{document.type && (
									<small>
										<b>Type : </b>
										<Link
											to={AppRoute.DOCUMENTS_SEARCH_TYPE.replace(
												':type',
												document.type.id.toString()
											).replace('(\\d+)', '')}>
											{document.type.name}
										</Link>
									</small>
								)}
							</div>

							<div>
								<div className="tags">
									{/* TODO: transform to link */}
									{document.tags?.map((tag, index) => (
										<Link
											to={AppRoute.DOCUMENTS_SEARCH_TAG.replace(
												':tag',
												tag.slug
											)}
											key={index}
											className="tag is-primary">
											{tag.name}
										</Link>
									))}
								</div>
							</div>
						</div>

						<div className="level-right">
							<button
								onClick={download}
								className="button is-link">
								Télécharger
							</button>
						</div>
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
