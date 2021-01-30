// imports
import { SchemaOf, object, string } from 'yup'

// main
type CreateDocumentData = {
	name: string
}

const createDocumentSchema: SchemaOf<CreateDocumentData> = object({
	name: string().required().trim().min(3).max(100),
}).defined()

// exports
export type { CreateDocumentData }
export { createDocumentSchema }
