// imports
import { SchemaOf, object, string, date, number, array } from 'yup'
import { endOfTomorrow } from 'date-fns'

// main
type CreateDocumentData = {
	name: string
	type?: number
	note?: string
	tags: string[]
	date?: Date
}

const createDocumentSchema: SchemaOf<CreateDocumentData> = object({
	name: string().required().trim().min(3).max(100),
	type: number()
		.transform((v) =>
			v === '' || v === undefined || isNaN(v) ? undefined : v
		)
		.positive(),
	note: string()
		.transform((v) => (v === null || v === '' ? undefined : v))
		.notRequired()
		.max(1000),
	tags: array().of(string()).required().max(8).ensure(),
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
