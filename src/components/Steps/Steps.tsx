import { SvgIconProps } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import Step from './Step/Step'

import styles from './Steps.module.css'

const STEPS = [
	{
		icon: <DirectionsCarIcon />,
		title: 'Choose a Car',
		subtitle: 'Research and select the car that meets your needs and budget.',
	},
	{
		icon: <MonetizationOnIcon />,
		title: 'Get a Quote',
		subtitle: 'Contact the dealership or get an online quote to know the price of the car.',
	},
	{
		icon: <QuestionAnswerIcon />,
		title: 'Negotiate Price',
		subtitle: 'Negotiate with the dealership or seller to get the best price possible.',
	},
	{
		icon: <CreditCardIcon />,
		title: 'Financing',
		subtitle: 'Arrange financing for your car, either through the dealership or your bank.',
	},
	{
		icon: <CheckCircleOutlineIcon />,
		title: 'Finalize the Purchase',
		subtitle: 'Sign the paperwork, pay for the car, and drive away in your new vehicle.',
	},
]

type StepProps = {
	icon?: React.ReactElement<SvgIconProps>
	title?: string
	subtitle?: string
}

const Steps = () => {
	return (
		<section className={styles.section}>
			<h5 className={styles.title}>Only 5 steps left to buy a new car!</h5>
			<div className={styles.steps}>
				{STEPS.map(({ icon, title, subtitle }: StepProps) => (
					<Step key={title} icon={icon} title={title} subtitle={subtitle} />
				))}
			</div>
		</section>
	)
}

export default Steps
