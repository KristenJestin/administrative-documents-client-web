// imports
import { format } from 'date-fns'

// main
const convertObjectToFormdata = (obj: any) => {
	const formData = new FormData()

	for (const key in obj) {
		let value = obj[key]
		if (obj[key] instanceof Date) value = format(value, 'dd-MM-yyyy')

		formData.append(key, value)
	}

	return formData
}

// exports
export { convertObjectToFormdata }
