// imports
import { SchemaOf, object, string, date, number, array, mixed } from 'yup'
import { endOfTomorrow } from 'date-fns'

// main
type CreateDocumentData = {
	name: string
	type?: number
	note?: string
	tags: string[]
	file?: File
	date?: Date
}

const createDocumentSchema: SchemaOf<CreateDocumentData> = object({
	name: string().required().trim().min(3).max(100),
	type: number()
		.transform((val) =>
			val === '' || val === undefined || isNaN(val) ? undefined : val
		)
		.positive(),
	note: string()
		.transform((val) => (val === null || val === '' ? undefined : val))
		.notRequired()
		.max(1000),
	tags: array().of(string()).required().max(8).ensure(),
	file: mixed<File>()
		.required()
		.test('fileSize', 'Le fichier est trop volumineux', (val) =>
			val ? val.size <= 2000000 : true
		),
	date: date()
		.transform((v) =>
			v === null ||
			v === '' ||
			v === [] ||
			v.toString() === 'Invalid Date'
				? undefined
				: v
		)
		.notRequired()
		.min(new Date(+0))
		.max(endOfTomorrow()),
}).defined()

// exports
export type { CreateDocumentData }
export { createDocumentSchema }
