import type { StatusCodes } from 'http-status-codes'

export class AppError {
	public statusCode: StatusCodes
	public message: string | string[]

	constructor(message: string | string[], statusCode: StatusCodes) {
		this.statusCode = statusCode
		this.message = message
	}
}
