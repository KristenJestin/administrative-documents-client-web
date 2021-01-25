// imports
import React, { useEffect } from 'react'

import MainContainer from '../../components/main-container.component'
import service from '../../services/document.service'

// main
const Documents = (): React.ReactElement => {
	useEffect(() => {
		console.log(service.find(1))
	}, [])

	return (
		<MainContainer>
			<div>Documents</div>
		</MainContainer>
	)
}

// exports
export default Documents
