import { MouseEventHandler, useState } from 'react'

import { Button as MaterialUiButton } from '@mui/material'

import styles from './Button.module.css'
import { SxProps, Theme } from '@mui/material/styles'

type ButtonProps = {
	disabled?: boolean
	type: 'text' | 'contained' | 'burger'
	color?: 'success' | 'error'
	href?: string
	children?: any
	sx?: SxProps<Theme>
	isOpened?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

const Button: React.FC<ButtonProps> = ({ type, children, isOpened, onClick, sx, ...props }): JSX.Element => {
	switch (type) {
		case 'contained':
			return (
				<MaterialUiButton className={styles.contained} variant={type} sx={sx} onClick={onClick} {...props}>
					{children}
				</MaterialUiButton>
			)

		case 'text':
			return (
				<MaterialUiButton className={styles.text} variant={type} sx={sx} onClick={onClick} {...props}>
					{children}
				</MaterialUiButton>
			)

		case 'burger': {
			return (
				// `burgerBtn burgerBtn--${isOpened ? 'opened' : 'closed'}`
				// burgerBtn__inner burgerBtn__inner--${isOpened ? 'opened' : 'closed'}
				<button className={styles.burger} onClick={onClick}>
					<div className={styles.inner}></div>
				</button>
			)
		}
	}
}

export default Button
