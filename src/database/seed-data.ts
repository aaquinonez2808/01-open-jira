interface SeedEntry {
	description: string
	status: 'pending' | 'finished' | 'in-progress'
	createdAt: number
}

interface SeedData {
	entries: SeedEntry[]
}

export const seedData: SeedData = {
	entries: [
		{
			description: 'Create a new project',
			status: 'pending',
			createdAt: Date.now() - 1000000
		},
		{
			description: 'Create a view for the projects',
			status: 'finished',
			createdAt: Date.now() - 100000
		},
		{
			description: 'Modify the project view to show the entries',
			status: 'in-progress',
			createdAt: Date.now() - 10000
		},
		{
			description: 'Create a view for the entries',
			status: 'in-progress',
			createdAt: Date.now() - 100
		}
	]
}
