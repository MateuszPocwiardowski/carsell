import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

import styles from './Layout.module.css'

type LayoutProps = {
	children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
