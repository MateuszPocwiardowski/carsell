import Accordion from '@Components/common/Accordion/Accordion'
import Select from '@Components/common/Select/Select'
import Input from '@Components/common/Input/Input'
import Button from '@Components/common/Button/Button'

import styles from './Filters.module.css'

type FiltersInteface = {
	categories: Array<string>
	brands: Array<string>
	models: Array<string>
	generations: Array<string>
	fuelTypes: Array<string>
}

type FilterProps = {
	filters: FiltersInteface
}

const Filters: React.FC<FilterProps> = ({ filters }): JSX.Element => {
	const handleApplyFilters = () => {
		console.log('Apply filters')
	}

	return (
		<Accordion title='Filters'>
			<div className={styles.filters}>
				<Select id='category' label='Category' variant='standard' options={filters.categories} />
				<Select id='brand' label='Brand' variant='standard' options={filters.brands} />
				<Select id='model' label='Model' variant='standard' options={filters.models} />
				<Select id='generation' label='Generation' variant='standard' options={filters.generations} />

				<div className={styles.range}>
					<Input id='price-from' label='Price from' type='number' variant='standard' />
					<span>-</span>
					<Input id='price-to' label='Price to' type='number' variant='standard' />
				</div>

				<Select id='fuel-type' label='Fuel type' variant='standard' options={filters.fuelTypes} />

				<div className={styles.range}>
					<Input id='course-from' label='Course from' type='number' variant='standard' />
					<span>-</span>
					<Input id='course-to' label='Course to' type='number' variant='standard' />
				</div>

				<Button type='contained' onClick={handleApplyFilters}>
					Apply filters
				</Button>
			</div>
		</Accordion>
	)
}

export default Filters
