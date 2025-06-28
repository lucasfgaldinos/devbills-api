import 'dotenv/config'
import express from 'express'

import cors from 'cors'
import { setupMongo } from './database'
import { errorHandler } from './middlewares/error-handler.middleware'
import { routes } from './routes'

setupMongo().then(() => {
	const app = express()

	app.use(
		cors({
			origin: process.env.FRONT_URL
		})
	)
	app.use(express.json())
	app.use(routes)
	// @ts-ignore
	app.use(errorHandler)

	const port = 3333

	app.listen(port, () => console.log(`🚀 App is running on port ${port}...`))
})
