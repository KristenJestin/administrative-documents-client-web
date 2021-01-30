// imports
import React from 'react'
import { FieldError } from 'react-hook-form'

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
	) => (
		<div className="field">
			<label className="label">{label}</label>
			<div
				className={`control ${icon && 'has-icons-left'} ${
					error && 'has-icons-right'
				}`}>
				<input
					name={name}
					className={`input ${error && 'is-danger'}`}
					type={type ?? 'text'}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					ref={ref}
				/>
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
					{error?.message || 'Le contenu de ce champ est incorrect.'}
				</p>
			)}
		</div>
	)
)

// exports
export default Field
