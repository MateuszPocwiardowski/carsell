import { SvgIconProps } from '@mui/material'

import styles from './Step.module.css'

type StepProps = {
	icon?: React.ReactElement<SvgIconProps>
	title?: string
	subtitle?: string
}

const Step: React.FC<StepProps> = ({ icon, title, subtitle }) => {
	return (
		<div className={styles.step}>
			<p className={styles.icon}>{icon}</p>
			<div className={styles.text}>
				<p className={styles.title}>{title}</p>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
	)
}

export default Step
