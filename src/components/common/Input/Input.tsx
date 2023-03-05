import React, { ChangeEventHandler } from 'react'
import { TextField as MaterialUiInput } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

type InputProps = {
	id: string
	label: string
	type: string
	defaultValue?: string
	autoComplete?: string
	helperText?: string
	sx?: SxProps<Theme>
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const Input: React.FC<InputProps> = ({ id, label, type, onChange, sx, ...props }): JSX.Element => {
	const [value, setValue] = React.useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<MaterialUiInput id={id} label={label} type={type} value={value} name={id} onChange={handleChange} {...props} />
	)
}

export default Input
