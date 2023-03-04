import React from 'react'
import { useRouter } from 'next/router'

import styles from '@Styles/Cars.module.css'

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
}

const Car: React.FC<CarProps> = ({ category, brand, model, generation, price, year, fuelType, course, images }) => {
	return (
		<React.Fragment>
			<h3 className={styles.title}>
				{brand} {model}
			</h3>
			<p className={styles.subtitle}>{generation}</p>
		</React.Fragment>
	)
}
export default Car
