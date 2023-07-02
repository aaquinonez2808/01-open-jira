import { Paper, List } from '@mui/material'
import { EntryCard } from './'
import { EntriesStatus } from '@/interfaces'
import { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'

import styles from './EntryList.module.css'

interface EntryListProps {
	status: EntriesStatus
}

export const EntryList: FC<EntryListProps> = ({ status }) => {
	const { entries, updateEntry } = useContext(EntriesContext)

	const { isDragging, endDragging } = useContext(UIContext)
	const entriesByStatus = useMemo(
		() => entries.filter(entry => entry.status === status),
		[entries, status]
	)

	const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
		const entryId = e.dataTransfer.getData('text')
		const entry = entries.find(entry => entry.id === entryId)!
		entry.status = status
		updateEntry(entry)
		endDragging()
	}

	const allowDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	return (
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ''}>
			<Paper
				sx={{
					height: 'calc(100vh - 150px)',
					overflowY: 'auto',
					backgroundColor: 'transparent',
					padding: 1
				}}>
				{/* Content */}
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
					{entriesByStatus.map(entry => (
						<EntryCard key={entry.id} entry={entry} />
					))}
				</List>
			</Paper>
		</div>
	)
}
