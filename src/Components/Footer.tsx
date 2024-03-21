import Image from 'next/image'
import styles from './footer.module.css'
import links from '@/api/data'
import Link from 'next/link'

export default function Footer () {
	return (
		<footer className={styles['footer-container']}>
			<div className={styles['footer-info']}>
				<div className={styles['hours-address-container']}>
					<div>
						<p className={styles['hours-address']}>MONDAY - SUNDAY</p>
						<p className={styles['hours-address']}>ALL DAY</p>
					</div>
					<div>
						<p className={styles['hours-address']}>37-24 24TH ST.</p>
						<p className={styles['hours-address']}>LONG ISLAND CITY, NY 11101</p>
					</div>
				</div>
				<div className={styles['purpose-container']}>
					<p>This will serve as the gallery for the select photographers
					that we are highlight for said months. this pages could serve 
					as our portfolio. To ensure an aesthetic look, I imagine we have 
					a gallery page of all cumulative work to be curated and updated, 
					instead of having project by project.</p>
				</div>
			</div>
			<div>
				<Image
					src={`WORDMARK_BLACK.svg`}
					alt="Vagabond Studios"
					width={225}
					height={100}
					className={styles['logo-large']}
				/>
			</div>
			<div className={styles['footer-links-container']}>
				{links.map((link) => {
					return (
						<Link 
							key={link} 
							href={`#${link}`}
							className={styles['footer-link']}
							>{link.toUpperCase()}
						</Link>
					)
				})}
			</div>
		</footer>
	)
}