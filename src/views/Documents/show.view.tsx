// imports
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MainContainer from '../../components/main-container.component'
import Document from '../../models/document/document.model'
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
	const { id } = useParams<ParamTypes>()
	const [pageState, setPageState] = useState<ShowState>({
		loading: true,
	})

	// events
	useEffect(() => {
		const wait = (delay: number) =>
			new Promise((resolve) => setTimeout(resolve, delay))

		;(async () => {
			const doc = (await service.find(parseInt(id))).data.result
			await wait(4000)

			setPageState(() => ({
				document: doc,
				loading: false,
			}))
		})()
	}, [id])

	// render
	return (
		<MainContainer
			title={`Détails du document "${
				!pageState.loading && pageState.document
					? pageState.document.name
					: '...'
			}"`}>
			<div>
				{pageState.loading && (
					<div className="is-center mt-6">
						<div className="loader"></div>
					</div>
				)}
				<h2>DOCUMENTS</h2>
			</div>
		</MainContainer>
	)
}

// exports
export default Show
