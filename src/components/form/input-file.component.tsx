// imports
import React, { ChangeEvent, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import DefaultElementProps from './default.props'

// main
type InputFileProps = {
	placeholder?: string
} & DefaultElementProps

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
	({ error = undefined, onChange, onBlur, value, name = '' }, ref) => {
		// config
		const defaultText = 'Aucun fichier selectionné'

		// hooks
		const { register, unregister, setValue, watch } = useFormContext()
		const files: File = watch(name)

		// events
		useEffect(() => {
			register(name)
			return () => {
				unregister(name)
			}
		}, [register, unregister, name])

		// methods
		const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
			if (!e || !e.target || !e.target.files || !e.target.files.length)
				return

			const file = e.target.files[0]
			if (onChange) onChange()
			if (onBlur) onBlur()
			setValue(name, file, { shouldValidate: true })
		}

		// render
		return (
			<div
				className={`file has-name ${
					error !== undefined ? 'is-danger' : ''
				}`}>
				<label className="file-label">
					<input
						className={'file-input'}
						type="file"
						name={name}
						onChange={onFileUpload}
						value={value}
						ref={ref}
					/>
					<span className="file-cta">
						<span className="file-icon">
							<i className="fas fa-upload" />
						</span>
						<span className="file-label">Choisir un fichier…</span>
					</span>
					<span className="file-name">
						{files ? files.name : defaultText}
					</span>
				</label>
			</div>
		)
	}
)

// exports
export default InputFile
