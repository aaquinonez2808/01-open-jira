import React, { FC, useEffect, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '@/apis'
export interface EntriesState {
	entries: Entry[]
}

const entriesInitialState: EntriesState = {
	entries: []
}

export const EntriesProvider: FC = ({ children }: any) => {
	const [state, dispatch] = useReducer(entriesReducer, entriesInitialState)

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			id: uuidv4(),
			description,
			status: 'pending',
			createdAt: Date.now()
		}
		dispatch({
			type: '[Entry] - Add-Entry',
			payload: newEntry
		})
	}

	const updateEntry = (entry: Entry) => {
		dispatch({
			type: '[Entry] - Update-Entry',
			payload: entry
		})
	}

	const refreshEntries = async () => {
		const response = await entriesApi.get<Entry>('/entries')
		console.log(response)
	}

	useEffect(() => {
		refreshEntries()
	}, [])

	return (
		<EntriesContext.Provider
			value={{
				...state,
				addNewEntry,
				updateEntry
			}}>
			{children}
		</EntriesContext.Provider>
	)
}
