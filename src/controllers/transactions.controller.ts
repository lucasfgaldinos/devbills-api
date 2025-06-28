import type { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import type {
	CreateTransactionDTO,
	GetDashboardDTO,
	GetFinancialEvolutionDTO,
	IndexTransactionsDTO
} from '../dtos/transactions.dto'
import type { TransactionsService } from '../services/transactions.service'
import type { BodyRequest, QueryRequest } from './types'

export class TransactionsController {
	constructor(private transactionsService: TransactionsService) {}

	create = async (
		req: BodyRequest<CreateTransactionDTO>,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { amount, categoryId, date, title, type } = req.body

			const transation = await this.transactionsService.create({
				amount,
				categoryId,
				date,
				title,
				type
			})

			res.status(StatusCodes.CREATED).json(transation)
		} catch (error) {
			next(error)
		}
	}

	index = async (
		req: QueryRequest<IndexTransactionsDTO>,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { title, categoryId, beginDate, endDate } = req.query
			const transation = await this.transactionsService.index({
				title,
				categoryId,
				beginDate,
				endDate
			})

			res.status(StatusCodes.OK).json(transation)
		} catch (error) {
			next(error)
		}
	}

	getDashboard = async (
		req: QueryRequest<GetDashboardDTO>,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { beginDate, endDate } = req.query
			const result = await this.transactionsService.getDashboard({
				beginDate,
				endDate
			})

			res.status(StatusCodes.OK).json(result)
		} catch (error) {
			next(error)
		}
	}

	getFinancialEvolution = async (
		req: QueryRequest<GetFinancialEvolutionDTO>,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { year } = req.query

			const result = await this.transactionsService.getFinancialEvolution({
				year
			})

			res.status(StatusCodes.OK).json(result)
		} catch (error) {
			next(error)
		}
	}
}
