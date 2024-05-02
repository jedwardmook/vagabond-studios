"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import { links } from "@/api/data";
import useIsAdminRoute from "../app/utils/routeUtils";

export default function Nav() {
	const [expanded, setExpanded] = useState(false);
	const isAdminRoute = useIsAdminRoute();


	return (
		!isAdminRoute &&
		<div className={`${styles.open} ${expanded ? styles.expanded : ''}`}>
			<div className={styles['navigation-container']}>
				<div className={styles['navigation-text']}>
					<p className={styles.heading}>VAGABOND STUDIOS · BEAUTIFUL CONCRETE DAYLIGHT WITH LARGE WINDOWS IN THE HEART OF LONG ISLAND CITY</p>
					<ul className={styles['nav-link-list']}>
						{links.map((link) => {
							return (
								<a key={link} href={link.replace(' ', '-')} className={styles['nav-link']}><li className={styles['link-list']}>{link.toUpperCase()}</li></a>
							);
						})}
					</ul>
					<div className={styles['studio-info-container']}>
						<div>
							<p className={styles['studio-info']}>MONDAY - SUNDAY</p>
							<p className={styles['studio-info']}>ALL DAY</p>
						</div>
						<div>
							<p className={styles['studio-info']}>37-24 24TH ST.</p>
							<p className={styles['studio-info']}>LONG ISLAND CITY, NY 11101</p>
						</div>
					</div>
				</div>
			</div>
			{expanded ?
				<div className={styles['close-container']}>
					<button className={styles['close-button']} onClick={() => setExpanded(!expanded)}>
						<Image
							src={`close.svg`}
							alt="close"
							width={0}
							height={0}
							className={styles['close-icon']}
						/>
					</button>
					<Image
						src={`vs.svg`}
						alt="Vagabond Studios"
						width={25}
						height={60}
						className={styles.vs}
					/>
				</div>
				:
				<div className={styles['open-container']}>
					<button className={styles['close-button']} onClick={() => setExpanded(!expanded)}>
						<Image
							src={`menu.svg`}
							alt="menu"
							width={0}
							height={0}
							className={styles.menu}
						/>
					</button>
          <a href="/">
					  <Image
						  src={`vs.svg`}
						  alt="Vagabond Studios"
						  width={25}
						  height={60}
						  className={styles.vs}
					  />
          </a>
				</div>
			}
		</div>
	);
}