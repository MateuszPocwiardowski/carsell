import React from 'react'

import styles from './Hashtag.module.css'

type HashtagProps = {
	suffix?: string
	children: string | number
}

const Hashtag: React.FC<HashtagProps> = ({ suffix, children }): JSX.Element => {
	return (
		<span className={styles.hashtag}>
			{children} {suffix}
		</span>
	)
}

export default Hashtag
