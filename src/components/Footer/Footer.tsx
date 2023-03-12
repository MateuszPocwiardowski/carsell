import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Divider from '../Navigation/Divider/Divider'

import styles from './Footer.module.css'

const Footer: React.FC = (): JSX.Element => {
	const actualYear = new Date().getFullYear()

	return (
		<React.Fragment>
			<Divider />
			<div className={styles.container}>
				<footer className={styles.footer}>
					<div className={styles.mark}>
						<span>{actualYear}</span>
						<span>|</span>
						<span>All Rights Reserved</span>
					</div>

					<div className={styles.links}>
						<a href='https://www.linkedin.com/in/mateusz-pocwiardowski/' target='_blank' rel='noreferrer'>
							<LinkedInIcon />
						</a>
						<a href='https://github.com/MateuszPocwiardowski' target='_blank' rel='noreferrer'>
							<GitHubIcon />
						</a>
					</div>
				</footer>
			</div>
		</React.Fragment>
	)
}

export default Footer
