// imports
import React from 'react'
import { FieldError } from 'react-hook-form'

// main
type FieldProps = {
	label: string
	icon?: string
	error?: FieldError
	children: JSX.Element
}

const Field: React.FunctionComponent<FieldProps> = ({
	label,
	children,
	icon = undefined,
	error = undefined,
}) => (
	<div className="field">
		<label className="label">{label}</label>
		<div
			className={`control ${icon !== undefined ? 'has-icons-left' : ''} ${
				error !== undefined ? 'has-icons-right' : ''
			}`}>
			{children}
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

// exports
export default Field
