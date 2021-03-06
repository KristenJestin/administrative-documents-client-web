// imports
import React from 'react'

// main
const NotFound = (): React.ReactElement => (
	<div className="has-text-centered">
		<span
			className="is-family-secondary is-uppercase has-text-danger"
			style={{ fontSize: '15rem' }}>
			404
		</span>
		<h1 className="title is-family-secondary">Page NotFound</h1>
	</div>
)

// exports
export default NotFound
