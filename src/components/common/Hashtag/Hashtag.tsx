import React from 'react'

import styles from './Hashtag.module.css'

type HashtagProps = {
	children: string
}

const Hashtag: React.FC<HashtagProps> = ({ children }): JSX.Element => {
	return <span className={styles.hashtag}>{children}</span>
}

export default Hashtag
