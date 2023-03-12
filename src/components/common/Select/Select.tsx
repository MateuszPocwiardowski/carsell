import React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import MaterialUISelect from '@mui/material/Select'

import styles from './Select.module.css'
import { SxProps, Theme } from '@mui/material/styles'

type SelectProps = {
	id: string
	label: string
	variant?: 'outlined' | 'standard'
	options: Array<string>
	sx?: SxProps<Theme>
}

const Select: React.FC<SelectProps> = ({ id, label, variant, options = [], sx }) => {
	const [value, setValue] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value)
	}

	return (
		<FormControl className={styles.select} variant={variant ? variant : 'outlined'} sx={sx}>
			<InputLabel id={id}>{label}</InputLabel>

			<MaterialUISelect
				className={styles.option}
				labelId={id}
				id={id}
				value={value}
				label={label}
				onChange={handleChange}>
				<MenuItem value=''>None</MenuItem>

				{options.map(option => (
					<MenuItem className={styles.option} key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</MaterialUISelect>
		</FormControl>
	)
}

export default Select
