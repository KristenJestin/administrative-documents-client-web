// main
const convertObjectToFormdata = (obj: any) => {
	const formData = new FormData()

	for (const key in obj) {
		formData.append(key, obj[key])
	}

	return formData
}

// exports
export { convertObjectToFormdata }
