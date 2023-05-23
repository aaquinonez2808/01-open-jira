import { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import { Layout } from '@/components/layouts/Layout'

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Typography variant='h1'>Hello World</Typography>
		</Layout>
	)
}

export default HomePage
