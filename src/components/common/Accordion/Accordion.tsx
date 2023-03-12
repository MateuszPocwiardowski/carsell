import * as React from 'react'

import { Accordion as MaterialUiAccordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import styles from './Accordion.module.css'
import { SxProps, Theme } from '@mui/material/styles'

type AccordionProps = {
	title?: string
	children?: any
	sx?: SxProps<Theme>
}

const Accordion: React.FC<AccordionProps> = ({ title, children, sx }): JSX.Element => {
	return (
		<MaterialUiAccordion disableGutters elevation={0} className={styles.accordion} sx={sx}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<span>{title}</span>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</MaterialUiAccordion>
	)
}

export default Accordion
