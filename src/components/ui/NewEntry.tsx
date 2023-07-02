import { Box, Button, TextField } from '@mui/material'
import { useState, useContext } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'

export const NewEntry = () => {
	const { isAddingEntry, openAddEntry, closeAddEntry } = useContext(UIContext)
	const { addNewEntry } = useContext(EntriesContext)
	const [inputValue, setInputValue] = useState('')
	const [touched, setTouched] = useState(false)

	const handleAddNewEntry = () => {
		if (inputValue.trim().length > 0) {
			addNewEntry(inputValue)
			setInputValue('')
			closeAddEntry()
			setTouched(false)
		}
	}
	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder='Nueva entrada'
						autoFocus
						multiline
						label='Nueva entrada'
						helperText='Escribe una nueva entrada'
						value={inputValue}
						error={touched && inputValue === ''}
						onBlur={() => setTouched(true)}
						onChange={e => setInputValue(e.target.value)}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button
							variant='text'
							onClick={() => {
								closeAddEntry()
								setTouched(false)
							}}>
							Cancelar
						</Button>
						<Button
							variant='outlined'
							color='secondary'
							endIcon={<SaveOutlinedIcon />}
							onClick={handleAddNewEntry}>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddIcon />}
					fullWidth
					variant='outlined'
					onClick={() => openAddEntry()}>
					Agregar Tarea
				</Button>
			)}
		</Box>
	)
}
