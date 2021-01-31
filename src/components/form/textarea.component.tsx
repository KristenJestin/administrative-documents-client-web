// imports
import React from 'react'

import DefaultElementProps from './default.props'

// main
type TextAreaProps = {
	placeholder?: string
} & DefaultElementProps

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			placeholder = undefined,
			error = undefined,
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => (
		<textarea
			name={name}
			className={`textarea ${error !== undefined ? 'is-danger' : ''}`}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			ref={ref}
		/>
	)
)

// exports
export default TextArea
