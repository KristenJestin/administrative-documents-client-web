// imports
import React from 'react'

// main
type MainContainerProps = {
	children: JSX.Element | JSX.Element[]
}

const MainContainer = ({
	children,
}: MainContainerProps): React.ReactElement => (
	<section className="section">
		<div className="container">{children}</div>
	</section>
)

// exports
export default MainContainer
