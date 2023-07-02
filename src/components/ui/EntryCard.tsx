import { UIContext } from '@/context/ui'
import { Entry } from '@/interfaces'
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	CardActions
} from '@mui/material'
import { FC, DragEvent, useContext } from 'react'

interface EntryCardProps {
	entry: Entry
}
export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
	const { startDragging, endDragging } = useContext(UIContext)

	const onDragStart = (e: DragEvent) => {
		e.dataTransfer.setData('text', entry.id)

		startDragging()
	}

	const onDragEnd = () => {
		endDragging()
	}
	return (
		<Card
			sx={{ marginBottom: 1 }}
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						{entry.description}
					</Typography>
				</CardContent>
				<CardActions
					sx={{ display: 'flex', justifyContent: 'end', padding: 2 }}>
					<Typography variant='body2'>hace 30 minutos</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}
