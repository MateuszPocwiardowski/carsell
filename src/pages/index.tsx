import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { MongoClient } from 'mongodb'

import Steps from '@Components/Steps/Steps'
import Cars from '@Components/Cars/Cars'
import Filters from '@Components/Filters/Filters'

import styles from '@Styles/Main.module.css'

type CarsInterface = {
	id: string
	brand?: string
	model?: string
	generation?: string
	fuelType?: string
	engineCapacity?: number
	price?: number
	year?: number
	course?: number
}

type FiltersInteface = {
	categories: Array<string>
	brands: Array<string>
	models: Array<string>
	generations: Array<string>
	fuelTypes: Array<string>
}

type CarsProps = {
	cars: Array<CarsInterface>
	filters: FiltersInteface
}

const Home: React.FC<CarsProps> = ({ cars, filters }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Carsell</title>
				<meta
					name='description'
					content="Looking to sell your car quickly and hassle-free? Look no further than our car selling page. With a simple and easy process, you can get an instant quote for your car and sell it for a fair price. We'll take care of all the paperwork and provide a convenient pickup service, so you can sit back and relax while we handle everything. Don't let the stress of selling your car hold you back - sell with us today!"
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.home}>
				<Steps />
				<Filters filters={filters} />
				<Cars cars={cars} />
			</div>
		</React.Fragment>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async context => {
	const client = await MongoClient.connect(
		'mongodb+srv://mpocwiardowski:tnmLqEI56WyjzMJU@cluster0.vlusofg.mongodb.net/cars?retryWrites=true&w=majority'
	)

	const db = client.db()
	const carsCollection = db.collection('cars')
	const cars = await carsCollection.find().toArray()

	client.close()

	return {
		props: {
			cars: cars.map(car => ({
				id: car._id.toString(),
				brand: car?.brand ?? '',
				model: car?.model ?? '',
				generation: car?.generation ?? '',
				engineCapacity: car?.engineCapacity ?? 0,
				fuelType: car?.fuelType ?? '',
				price: car?.price ?? 0,
				year: car?.year ?? 0,
				course: car?.course ?? 0,
				images: car?.images ?? [],
			})),
			filters: {
				categories: cars.map(car => car?.category).filter((value, index, self) => self.indexOf(value) === index),
				brands: cars.map(car => car?.brand).filter((value, index, self) => self.indexOf(value) === index),
				models: cars.map(car => car?.model).filter((value, index, self) => self.indexOf(value) === index),
				generations: cars.map(car => car?.generation).filter((value, index, self) => self.indexOf(value) === index),
				fuelTypes: cars.map(car => car?.fuelType).filter((value, index, self) => self.indexOf(value) === index),
			},
		},
		revalidate: 1,
	}
}
