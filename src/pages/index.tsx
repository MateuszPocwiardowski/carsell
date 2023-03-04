import React from 'react'
import Head from 'next/head'

import Filters from '../components/Filters/Filters'

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Carsell</title>
				<meta name='description' content='Carsell' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h2>Home page</h2>
			<Filters />
		</React.Fragment>
	)
}
