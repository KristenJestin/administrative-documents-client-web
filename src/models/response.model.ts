// main
interface SuccessResponse<T> {
	message: string
	result: T
}

interface ValidationError {
	name: string
	reason: string
}

interface ErrorResponse {
	isError: boolean
	type: string
	title: string
	status: number
	detail?: any
	instance: string
	validationErrors?: ValidationError[]
}

// exports
export type { SuccessResponse, ErrorResponse }
