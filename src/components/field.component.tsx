// imports
import React from 'react'
import { FieldError } from 'react-hook-form'
import Flatpickr from 'react-flatpickr'
import { French } from 'flatpickr/dist/l10n/fr'

// main
type FieldProps = {
	label: string
	type?: string
	placeholder?: string
	icon?: string
	error?: FieldError

	onChange?: (...event: any[]) => void
	onBlur?: () => void
	value?: any
	name?: string
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
	(
		{
			label,
			type = undefined,
			placeholder = undefined,
			icon = undefined,
			error = undefined,
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => {
		// methods
		const renderInput = () => {
			switch (type) {
				case 'date':
					const onChangeCustom = (date: any) => {
						if (onChange) onChange(date)
						if (onBlur) onBlur()
					}
					return (
						<Flatpickr
							name={name}
							className={`input ${
								error !== undefined ? 'is-danger' : ''
							}`}
							type={type ?? 'text'}
							placeholder={placeholder}
							onChange={onChangeCustom}
							value={value}
							options={{
								locale: French,
								altInput: true,
								altFormat: 'd F Y',
							}}
						/>
					)

				default:
					return (
						<input
							name={name}
							className={`input ${
								error !== undefined ? 'is-danger' : ''
							}`}
							type={type ?? 'text'}
							placeholder={placeholder}
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							ref={ref}
						/>
					)
			}
		}

		// render
		return (
			<div className="field">
				<label className="label">{label}</label>
				<div
					className={`control ${
						icon !== undefined ? 'has-icons-left' : ''
					} ${error !== undefined ? 'has-icons-right' : ''}`}>
					{renderInput()}
					{icon && (
						<span className="icon is-small is-left">
							<i className={icon} />
						</span>
					)}
					{error && (
						<span className="icon is-small is-right">
							<i className="fas fa-exclamation-triangle" />
						</span>
					)}
				</div>
				{error && (
					<p className="help is-danger">
						{error?.message ||
							'Le contenu de ce champ est incorrect.'}
					</p>
				)}
			</div>
		)
	}
)

// exports
export default Field
