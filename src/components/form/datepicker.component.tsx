// imports
import React from 'react'
import Flatpickr from 'react-flatpickr'
import flatpickr from 'flatpickr'
import { French } from 'flatpickr/dist/l10n/fr'

import DefaultElementProps from './default.props'

// main
type DatePickerProps = {
	placeholder?: string
	options?: flatpickr.Options.Options
} & DefaultElementProps

const DatePicker = React.forwardRef<Flatpickr, DatePickerProps>(
	(
		{
			placeholder = undefined,
			error = undefined,
			options = {},
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => (
		<Flatpickr
			name={name}
			className={`input ${error !== undefined ? 'is-danger' : ''}`}
			placeholder={placeholder}
			onClose={onBlur}
			onValueUpdate={onChange}
			value={value}
			options={{
				...{
					locale: French,
					altInput: true,
					altFormat: 'd F Y',
					defaultDate: undefined,
				},
				...options,
			}}
			ref={ref}
		/>
	)
)

// exports
export default DatePicker
