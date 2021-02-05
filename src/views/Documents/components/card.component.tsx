// imports
import React from 'react'
import { Link } from 'react-router-dom'

import DocumentTag from '../../../models/document-tag/document-tag.model'
import DocumentType from '../../../models/document-type/document-type.model'
import AppRoute from '../../../navigations/app-routes'

// main
type DocumentCardProps = {
	id: number
	name: string
	note?: string
	type?: DocumentType
	tags?: DocumentTag[]
}

const DocumentCard = ({
	id,
	name,
	note,
	type,
	tags,
}: DocumentCardProps): React.ReactElement => (
	<div className="card mb-4">
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
							<strong className="mr-2">{name}</strong>
							{type && (
								<small>
									<a href={type.id.toString()}>{type.name}</a>
								</small>
							)}
							<br />
							{note || <i>aucune note</i>}
						</p>
					</div>
					<nav className="level is-mobile">
						<div className="level-left">
							<div className="tags">
								{/* TODO: transform to link */}
								{tags?.map((tag, index) => (
									<span
										key={index}
										className="tag is-primary">
										{tag.name}
									</span>
								))}
							</div>
						</div>

						{/* TODO: transform to link */}
						<div className="level-right">
							<span className="level-item button is-light">
								Afficher le dossier
							</span>
							<Link
								to={AppRoute.DOCUMENT_SHOW.replace(
									':id',
									id.toString()
								).replace('(\\d+)', '')}
								className="level-item button is-link">
								Détails
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
)

// exports
export default DocumentCard
