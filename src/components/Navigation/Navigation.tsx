import React from 'react'
import Link from 'next/link'

import Button from '@Components/common/Button/Button'
import Divider from '../Footer/Divider/Divider'

import styles from './Navigation.module.css'

const Navigation: React.FC = (): JSX.Element => {
	return (
		<React.Fragment>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<h1 className={styles.logo}>
						<Link href='/'>Carsell</Link>
					</h1>

					<Button type='burger' />

					<ul className={styles.links}>
						<li className={styles.link}>
							<Link href='/'>Home</Link>
						</li>
						<li className={styles.link}>
							<Link href='/about'>About</Link>
						</li>
						<li className={styles.link}>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Divider />
		</React.Fragment>
	)
}

export default Navigation
