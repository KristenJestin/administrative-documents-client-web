import React from 'react'
import { AlertComponentPropsWithStyle, AlertType, types } from 'react-alert'

const AlertTemplate: React.FunctionComponent<AlertComponentPropsWithStyle> = ({
	style,
	options,
	message,
	close,
}: AlertComponentPropsWithStyle) => {
	const classType = (type?: AlertType): string => {
		switch (type) {
			case types.INFO:
				return `is-${type}`
			case types.SUCCESS:
				return `is-${type}`
			case types.ERROR:
				return 'is-danger'
			default:
				return 'is-primary'
		}
	}

	return (
		<div
			className={`notification py-2  ${classType(options.type)}`}
			style={style}>
			<button
				className="delete"
				type="button"
				onClick={close}
				aria-label="Close notification"
			/>
			{message}
		</div>
	)
}

export default AlertTemplate
