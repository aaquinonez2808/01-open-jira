import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'
import { Sidebar, Navbar } from '../ui'

interface LayoutProps {
	title?: string
	children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ title = 'OpenJira', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar />
			<Sidebar />

			<Box
				component='main'
				sx={{
					padding: '10px 20px'
				}}>
				{/* Content */}
				{children}
			</Box>
		</Box>
	)
}
