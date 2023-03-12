import Car from './Car/Car'

import styles from './Cars.module.css'

type CarInterface = {
	id: string
	brand?: string
	model?: string
	generation?: string
	fuelType?: string
	engineCapacity?: number
	price?: number
	year?: number
	course?: number
	images?: Array<string>
}

type CarsProps = {
	cars: Array<CarInterface>
}

const Cars: React.FC<CarsProps> = ({ cars }) => {
	return (
		<div className={styles.cards}>
			{cars.length > 0 &&
				cars.map((car: CarInterface) => (
					<Car
						key={car.id}
						id={car.id}
						brand={car?.brand}
						model={car?.model}
						generation={car?.generation}
						fuelType={car?.fuelType}
						engineCapacity={car?.engineCapacity}
						price={car?.price}
						year={car?.year}
						course={car?.course}
						images={car?.images}
					/>
				))}
		</div>
	)
}

export default Cars
