// imports
import React from 'react'

import DefaultElementProps from './default.props'

// main
type SelectDataProps = {
	id: number | string
	text: string
}

type SelectProps = {
	placeholder?: string
	data?: SelectDataProps[]
} & DefaultElementProps

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			placeholder = undefined,
			error = undefined,
			data = undefined,
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => (
		<div
			className={`select ${data && data.length ? '' : ' is-loading'}  ${
				error !== undefined ? 'is-danger' : ''
			}`}>
			<select
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				ref={ref}>
				{placeholder && (
					<option value={undefined} className="has-text-grey">
						{placeholder}
					</option>
				)}
				{data?.map((value) => (
					<option key={value.id} value={value.id}>
						{value.text}
					</option>
				))}
			</select>
		</div>
	)
)

// exports
export default Select
