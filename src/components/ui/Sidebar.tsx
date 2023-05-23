import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import { useContext } from 'react'
import { UIContext } from '@/context/ui'
const menuItems: string[] = ['Imbox', 'Starred', 'Send Email', 'Settings']

export const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useContext(UIContext)
	return (
		<Drawer anchor='left' open={isSidebarOpen} onClose={closeSidebar}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant='h4'>Menu</Typography>
				</Box>

				<List>
					{menuItems.map((menuItem, index) => (
						<ListItem key={index} button>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<InboxOutlinedIcon />
								) : (
									<MailOutlineOutlinedIcon />
								)}
							</ListItemIcon>

							<ListItemText primary={menuItem} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{menuItems.map((menuItem, index) => (
						<ListItem key={index} button>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<InboxOutlinedIcon />
								) : (
									<MailOutlineOutlinedIcon />
								)}
							</ListItemIcon>

							<ListItemText primary={menuItem} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	)
}
