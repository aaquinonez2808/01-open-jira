import mongoose from 'mongoose'

/*
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnection = {
	isConnected: 0
}

export const connect = async () => {
	if (mongooConnection.isConnected) {
		console.log('Already connected')
		return
	}

	if (mongoose.connections.length > 0) {
		mongooConnection.isConnected = mongoose.connections[0].readyState

		if (mongooConnection.isConnected === 1) {
			console.log('Use previous connection')
			return
		}
		await mongoose.disconnect()
	}
	await mongoose.connect(process.env.MONGO_URI || '')
	mongooConnection.isConnected = 1
	console.log('New connection')
}

export const disconnect = async () => {
	if (process.env.NODE_ENV === 'production') {
		return
	}

	if (mongooConnection.isConnected === 0) {
		return
	}
	await mongoose.disconnect()
	console.log('Disconnected')
}
