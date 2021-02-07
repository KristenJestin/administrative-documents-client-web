// imports
import DocumentFile from '../document-file/document-file.model'
import DocumentTag from '../document-tag/document-tag.model'
import DocumentType from '../document-type/document-type.model'

// main
interface Document {
	id: number
	name: string
	fileId: number
	note: string
	type?: DocumentType
	tags: DocumentTag[]
	file: DocumentFile
	amount?: number
	date?: Date
	duration?: number
	endDate?: Date
}

// epxorts
export default Document
