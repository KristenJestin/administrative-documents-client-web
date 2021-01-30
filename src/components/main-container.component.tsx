// imports
import React from 'react'

// main
type MainContainerProps = {
	children: JSX.Element | JSX.Element[]
	title?: string
	subtitle?: string
}

const MainContainer = ({
	title,
	subtitle,
	children,
}: MainContainerProps): React.ReactElement => (
	<>
		<section className="section">
			<div className="container">
				<div>
					{title && <h1 className="title is-uppercase">{title}</h1>}
					{subtitle && <h2 className="subtitle">{subtitle}</h2>}
				</div>
				<div className="mt-5">{children}</div>
			</div>
		</section>
	</>
)

// exports
export default MainContainer
