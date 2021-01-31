// imports
import { SchemaOf, object, string, date, number } from 'yup'
import { endOfTomorrow } from 'date-fns'

// main
type CreateDocumentData = {
	name: string
	type?: number
	note?: string
	date?: Date
}

const createDocumentSchema: SchemaOf<CreateDocumentData> = object({
	name: string().required().trim().min(3).max(100),
	type: number().notRequired().positive(),
	note: string().notRequired().max(1000),
	date: date()
		.notRequired()
		.min(new Date(+0))
		.max(endOfTomorrow()),
}).defined()

// exports
export type { CreateDocumentData }
export { createDocumentSchema }
