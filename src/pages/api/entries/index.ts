import { db } from '@/database'
import { Entry, IEntry } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
	| {
			message: string
	  }
	| IEntry[]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case 'GET':
			return getEntries(res)
		case 'POST':
			return createEntry(req, res)
		default:
			return res.status(405).json({ message: 'Method not allowed' })
	}
}

export async function getEntries(res: NextApiResponse<Data>) {
	await db.connect()
	const entries = await Entry.find().sort({ createdAt: 'ascending' })

	await db.disconnect()

	res.status(200).json(entries)
}

export async function createEntry(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ message: 'Example' })
}
