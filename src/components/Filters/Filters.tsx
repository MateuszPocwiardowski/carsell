import Select from '@Components/common/Select/Select'
import Input from '@Components/common/Input/Input'

import styles from './Filters.module.css'

const Filters: React.FC = (): JSX.Element => {
	return (
		<div className={styles.filters}>
			<p className={styles.title}>Filter options</p>

			<Select id='category' label='Category' options={['Cars', 'Motocycles and scooters', 'Trucks']} />
			<Select id='brand' label='Brand' options={['Toyota', 'Honda', 'Mercedes']} />
			<Select id='model' label='Model' options={['Toyota', 'Honda', 'Mercedes']} />
			<Select id='generation' label='Generation' options={['Toyota', 'Honda', 'Mercedes']} />

			<div className={styles.range}>
				<Input id='price-from' label='Price from' type='number' />
				<span>-</span>
				<Input id='price-to' label='Price to' type='number' />
			</div>

			<Select id='fuel-type' label='Fuel type' options={['LPG', 'Benzine', 'Diesel', 'Electric']} />

			<div className={styles.range}>
				<Input id='course-from' label='Course from' type='number' />
				<span>-</span>
				<Input id='course-to' label='Course to' type='number' />
			</div>
		</div>
	)
}

export default Filters
