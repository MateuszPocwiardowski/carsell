import { useRouter } from 'next/router'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import Hashtag from '@Components/common/Hashtag/Hashtag'

import styles from './Car.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type CarProps = {
	id: string
	brand?: string
	model?: string
	generation?: string
	fuelType?: string
	engineCapacity?: number
	price?: number
	year?: number
	course?: number
	images?: Array<string>
}

const Car: React.FC<CarProps> = ({
	id,
	brand,
	model,
	generation,
	fuelType,
	engineCapacity,
	price,
	year,
	course,
	images = [],
}) => {
	const router = useRouter()

	const showMoreHandler = () => {
		router.push('/cars/' + id)
	}

	const formatter = new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: 'PLN',
	})

	return (
		<div className={styles.card}>
			<div className={styles.carousel}>
				<Swiper
					modules={[Pagination]}
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					// @ts-ignore: next-line
					style={{ '--swiper-navigation-color': '#fff', '--swiper-theme-color': '#fff' }}>
					{images.length > 0 &&
						images.map((image, index) => (
							<SwiperSlide key={`${brand} ${model} ${index}`}>
								<span className={styles.sale}>Sale</span>
								<img className={styles.image} src={image} alt={`${brand} ${model} ${generation}`} />
								<button className={styles.button}>
									<FavoriteBorderIcon />
								</button>
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<button className={styles.button} onClick={showMoreHandler}>
				<p className={styles.title}>
					{brand} {model} {generation}
				</p>

				<div className={styles.hashtags}>
					{!!year && <Hashtag>{year}</Hashtag>}
					{!!course && <Hashtag suffix='km'>{course}</Hashtag>}
					{!!engineCapacity && <Hashtag suffix='cm3'>{engineCapacity}</Hashtag>}
					{fuelType && <Hashtag>{fuelType}</Hashtag>}
				</div>

				<p className={styles.sale}>{formatter.format(1.1 * Number(price))}</p>
				<p className={styles.price}>{formatter.format(Number(price))}</p>
			</button>
		</div>
	)
}

export default Car
