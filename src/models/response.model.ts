// main
interface SuccessResponse<T> {
	message: string
	result: T
}

interface ErrorResponse {
	isError: boolean
	type: string
	title: string
	status: number
	detail?: any
	instance: string
}

// exports
export type { SuccessResponse, ErrorResponse }
