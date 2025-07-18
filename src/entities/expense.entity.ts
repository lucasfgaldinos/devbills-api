type ExpenseProps = {
	_id?: string
	title: string
	color: string
	amount: number
}

export class Expense {
	public _id?: string
	public title: string
	public color: string
	public amount: number

	constructor({ amount, color, title, _id }: ExpenseProps) {
		this._id = _id
		this.amount = amount
		this.color = color
		this.title = title
	}
}
