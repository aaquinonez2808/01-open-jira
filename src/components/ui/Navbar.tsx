import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { UIContext } from '@/context/ui'
import { useContext } from 'react'

export const Navbar = () => {
	const { openSidebar } = useContext(UIContext)

	return (
		<AppBar position='sticky' color='default' elevation={0}>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					onClick={openSidebar}>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	)
}
