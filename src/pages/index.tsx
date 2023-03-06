import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { MongoClient } from 'mongodb'

import Filters from '../components/Filters/Filters'

import styles from '@Styles/Main.module.css'

type carsInterface = {
	category: 'cars' | 'motorcycles and scooters' | 'trucks'
	brand: string
	model: string
	generation: string
	price: number
	year: number
	fuelType: number
	course: number
	images: Array<string>
	description: string
}

type homeProps = {
	cars: Array<carsInterface>
}

const Home: React.FC<homeProps> = ({ cars }) => {
	const router = useRouter()

	const showMoreHandler = ({ id }: { id: number }) => {
		router.push('/cars/' + id)
	}

	return (
		<React.Fragment>
			<Head>
				<title>Carsell</title>
				<meta name='description' content='Carsell' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h2>Home page</h2>
			<div className={styles.home}>
				<Filters />
				<div className={styles.container}>
					{cars.length > 0 &&
						cars.map((car: any) => {
							return (
								<button
									className={styles.car}
									onClick={() => {
										showMoreHandler({ id: car?.id })
									}}>
									<p>
										{car?.brand} {car?.model}
									</p>
									<p>{car?.generation}</p>
									<p>
										{car?.price} PLN · {car?.year} · {car?.course}
									</p>
								</button>
							)
						})}
				</div>
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
				id: car?._id.toString(),
				brand: car?.brand,
				model: car?.model,
				price: car?.price,
				year: car?.year,
				course: car?.course,
			})),
		},
		revalidate: 1,
	}
}
