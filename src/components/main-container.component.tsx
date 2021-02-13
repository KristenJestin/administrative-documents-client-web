// imports
import React from 'react'

// main
type MainContainerProps = {
	children: JSX.Element | JSX.Element[]
	title?: string
	subtitle?: string
	right?: JSX.Element | JSX.Element[]
}

const MainContainer = ({
	title,
	subtitle,
	children,
	right,
}: MainContainerProps): React.ReactElement => (
	<>
		<section className="section">
			<div className="container">
				<div className="level">
					<div className="level-left">
						{title && (
							<h1 className="title is-uppercase has-text-grey-darker">
								{title}
							</h1>
						)}
						{subtitle && (
							<h2 className="subtitle has-text-grey">
								{subtitle}
							</h2>
						)}
					</div>
					{right && <div className="level-right">{right}</div>}
				</div>
				<div className="mt-5">{children}</div>
			</div>
		</section>
	</>
)

// exports
export default MainContainer
