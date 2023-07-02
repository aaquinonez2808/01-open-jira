export type EntriesStatus = 'pending' | 'in-progress' | 'finished'

export interface Entry {
	id: string
	description: string
	createdAt: number
	status: EntriesStatus
}
