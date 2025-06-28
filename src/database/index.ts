import mongoose from 'mongoose'

export async function setupMongo(): Promise<void> {
	try {
		if (mongoose.connection.readyState === 1) {
			return
		}

		console.log('🎲 Connecting to the DB...')

		await mongoose.connect(process.env.MONGO_URL as string)

		console.log('✅ Connected DB.')
	} catch {
		throw new Error('❌ Failed to connect to DB!')
	}
}
