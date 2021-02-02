// imports
import React from 'react'

import DefaultElementProps from './default.props'

// main
type InputProps = {
	placeholder?: string
	type?: string
	step?: string
} & DefaultElementProps

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			placeholder = undefined,
			error = undefined,
			type = undefined,
			step = undefined,
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => (
		<input
			name={name}
			className={`input ${error !== undefined ? 'is-danger' : ''}`}
			type={type ?? 'text'}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			ref={ref}
			step={step}
		/>
	)
)

// exports
export default Input
