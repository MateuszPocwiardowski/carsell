import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { MongoClient, ObjectId } from 'mongodb'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Hashtag from '@Components/common/Hashtag/Hashtag'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import styles from '@Styles/Car.module.css'
import 'swiper/css'
import 'swiper/css/pagination'

type CarProps = {
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

const Car: React.FC<CarProps> = ({
	category,
	brand,
	model,
	generation,
	price,
	year,
	fuelType,
	course,
	images = [],
	description,
}) => {
	const hashtags = [
		{ key: 'Model', value: `${brand} ${model}`, suffix: '' },
		{ key: 'Engine capacity', value: fuelType, suffix: 'cm3' },
		{ key: 'Engine power', value: '', suffix: 'KM' },
		{ key: 'Fuel type', value: '', suffix: '' },
		{ key: 'Type', value: category, suffix: '' },
		{ key: 'Production year', value: year, suffix: '' },
		{ key: 'Course', value: course, suffix: 'km' },
		{ key: 'Colour', value: '', suffix: '' },
		{ key: 'State', value: '', suffix: '' },
		{ key: 'Gearbox', value: '', suffix: '' },
		{ key: 'Country of origin', value: '', suffix: '' },
	]

	return (
		<div className={styles.cars}>
			<Link className={styles.link} href='/'>
				<ArrowBackIcon sx={{ fontSize: 18 }} />
				Go back
			</Link>

			<div className={styles.container}>
				<Swiper
					modules={[Pagination]}
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					// @ts-ignore: next-line
					style={{ '--swiper-navigation-color': '#fff', '--swiper-theme-color': '#fff' }}>
					{images.length > 0 &&
						images.map((image, index) => (
							<SwiperSlide key={`${brand} ${model} ${index}`}>
								<img className={styles.image} src={image} alt={`${brand} ${model} ${generation}`} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<div className={styles.title}>
				{brand && model && (
					<h3>
						{brand} {model}
					</h3>
				)}

				{generation && <p>{generation}</p>}
			</div>

			{price && (
				<div className={styles.price}>
					<span>{price}</span>
					<span className={styles.suffix}> PLN</span>
				</div>
			)}

			<div className={styles.hashtags}>
				{hashtags.length > 0 &&
					hashtags.map(({ key, value }) => {
						if (typeof value === 'string') {
							return !value.includes('undefined') && !!value && <Hashtag>{`${key}: ${value}`}</Hashtag>
						} else {
							return value && <Hashtag>{`${key}: ${value}`}</Hashtag>
						}
					})}
			</div>

			<div className={styles.details}>
				<h5>Details</h5>
				{hashtags.map(({ key, value, suffix }) => (
					<p key={key}>
						{key}: {value ? value : '-'} {suffix}
					</p>
				))}
			</div>

			<div className={styles.description}>
				<h5>Description</h5>
				{description}
			</div>
		</div>
	)
}
export default Car

export const getStaticPaths: GetStaticPaths = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://mpocwiardowski:tnmLqEI56WyjzMJU@cluster0.vlusofg.mongodb.net/cars?retryWrites=true&w=majority'
	)

	const db = client.db()
	const carsCollection = db.collection('cars')
	const cars = await carsCollection.find().toArray()

	client.close()

	return {
		fallback: 'blocking',
		paths: cars.map(car => ({
			params: { carId: car?._id.toString() },
		})),
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const client = await MongoClient.connect(
		'mongodb+srv://mpocwiardowski:tnmLqEI56WyjzMJU@cluster0.vlusofg.mongodb.net/cars?retryWrites=true&w=majority'
	)

	const db = client.db()
	const carsCollection = db.collection('cars')

	const selectedId = context?.params?.carId as string
	const selectedCar = await carsCollection.findOne({ _id: new ObjectId(selectedId) })

	client.close()

	return {
		props: {
			...selectedCar,
			_id: null,
			id: selectedCar?._id.toString(),
		},
	}
}
