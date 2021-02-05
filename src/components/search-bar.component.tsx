// imports
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isEmptyOrSpaces } from '../common/helpers/text.helper'
import AppRoute from '../navigations/app-routes'

// main
type SearchBarProps = {
	defaultSearch: string | null
}

const SearchBar = ({
	defaultSearch = '',
}: SearchBarProps): React.ReactElement => {
	// hooks
	const history = useHistory()
	const [search, setSearch] = useState(defaultSearch || '')

	// methods
	const onSubmit = () => {
		if (isEmptyOrSpaces(search)) return
		history.push(AppRoute.DOCUMENTS_SEARCH.replace(':search', search))
	}

	// render
	return (
		<div className="field has-addons">
			<p className="control is-expanded">
				<input
					className="input"
					type="text"
					placeholder="Rechercher un document"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') onSubmit()
					}}
				/>
			</p>
			<p className="control">
				<button className="button is-info" onClick={onSubmit}>
					Rechercher
				</button>
			</p>
		</div>
	)
}

// exports
export default SearchBar
