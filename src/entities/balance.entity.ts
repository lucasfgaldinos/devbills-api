type BalanceProps = {
	_id?: string | number[] | null
	incomes: number
	expenses: number
	balance: number
}

export class Balance {
	public _id?: string | number[] | null
	public incomes: number
	public expenses: number
	public balance: number

	constructor({ balance, expenses, incomes, _id }: BalanceProps) {
		this._id = _id
		this.expenses = expenses
		this.incomes = incomes
		this.balance = balance
	}
}
