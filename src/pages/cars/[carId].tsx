import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import Hashtag from '@Components/common/Hashtag/Hashtag'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import 'swiper/css'
import styles from '@Styles/Cars.module.css'
import { describe } from 'node:test'

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
					spaceBetween={0}
					slidesPerView={1}
					scrollbar={{ draggable: true }}
					onSlideChange={() => {}}
					onSwiper={() => {}}>
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
					<p>
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
	return {
		fallback: false,
		paths: [
			{ params: { carId: '1' } },
			{ params: { carId: '2' } },
			{ params: { carId: '3' } },
			{ params: { carId: '4' } },
			{ params: { carId: '5' } },
			{ params: { carId: '6' } },
			{ params: { carId: '7' } },
			{ params: { carId: '8' } },
			{ params: { carId: '9' } },
		],
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const carId = context?.params?.carId

	const res = await fetch('http://localhost:3000/data.json')
	const cars = await res.json()

	const contentToDisplay = cars.find((car: any) => car?.id == carId)

	return {
		props: contentToDisplay,
	}
}
