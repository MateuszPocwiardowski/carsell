import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import MaterialUISelect from '@mui/material/Select'

type SelectProps = {
	id: string
	options: Array<string>
}

const Select: React.FC<SelectProps> = ({ id, options = [] }) => {
	const [value, setValue] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value)
	}

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel id={id} sx={{ textTransform: 'capitalize' }}>
				{id}
			</InputLabel>

			<MaterialUISelect
				labelId={id}
				id={id}
				value={value}
				label='Age'
				onChange={handleChange}
				sx={{
					'& label.Mui-focused': {
						color: '#818890',
					},
					'& .MuiInput-underline:after': {
						borderBottomColor: '#84846b',
					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#818890',
						},
						'&:hover fieldset': {
							borderColor: '#818890',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#84846b',
						},
					},
				}}>
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>

				{options.map(option => (
					<MenuItem value={option}>{option}</MenuItem>
				))}
			</MaterialUISelect>
		</FormControl>
	)
}

export default Select
