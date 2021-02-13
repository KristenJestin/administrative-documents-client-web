// imports
import { FieldError } from 'react-hook-form'

// main
type DefaultElementProps = {
	error?: FieldError

	onChange?: (...event: any[]) => void
	onBlur?: () => void
	value?: any
	name?: string
}

// exports
export default DefaultElementProps
