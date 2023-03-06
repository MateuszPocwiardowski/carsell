import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import MaterialUISelect from '@mui/material/Select'

type SelectProps = {
	id: string
	label: string
	options: Array<string>
}

const Select: React.FC<SelectProps> = ({ id, label, options = [] }) => {
	const [value, setValue] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value)
	}

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel id={id}>{label}</InputLabel>

			<MaterialUISelect labelId={id} id={id} value={value} label={label} onChange={handleChange}>
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>

				{options.map(option => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</MaterialUISelect>
		</FormControl>
	)
}

export default Select
