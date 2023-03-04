import Link from 'next/link'

import styles from './Navigation.module.css'

const Navigation: React.FC = (): JSX.Element => {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.logo}>
				<Link href='/'>Carsell</Link>
			</h1>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
