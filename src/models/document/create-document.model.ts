// imports
import { SchemaOf, object, string, date } from 'yup'
import { endOfTomorrow } from 'date-fns'

// main
type CreateDocumentData = {
	name: string
	date?: Date
}

const createDocumentSchema: SchemaOf<CreateDocumentData> = object({
	name: string().required().trim().min(3).max(100),
	date: date()
		.notRequired()
		.min(new Date(+0))
		.max(endOfTomorrow()),
}).defined()

// exports
export type { CreateDocumentData }
export { createDocumentSchema }
