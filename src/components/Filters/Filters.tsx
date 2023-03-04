import styles from './Filters.module.css'
import Select from '@Components/common/Select/Select'

const Filters: React.FC = (): JSX.Element => {
	return (
		<div className={styles.filters}>
			<Select id='category' options={['Cars', 'Motocycles and scooters', 'Trucks']} />
			<Select id='brand' options={['Toyota', 'Honda', 'Mercedes']} />
			<Select id='model' options={['Toyota', 'Honda', 'Mercedes']} />
			<Select id='generation' options={['Toyota', 'Honda', 'Mercedes']} />
		</div>
	)
}

export default Filters
