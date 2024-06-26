"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import { links } from "@/api/data";
import useIsAdminRoute from "../app/utils/routeUtils";
import { useRouter } from "next/navigation";
import close from '../../public/close.svg';
import vs from '../../public/vs.svg';
import menu from '../../public/menu.svg';

export default function Nav() {
	const [expanded, setExpanded] = useState(false);
	const isAdminRoute = useIsAdminRoute();
  const router = useRouter();

  const handleLinkClick = (link: string) => {
      const path = link.replace(" ", "-");
      router.replace(`/${path}`);
      setExpanded(!expanded);
  };

	return (
		!isAdminRoute &&
		<div className={`${styles.open} ${expanded ? styles.expanded : ''}`}>
			<div className={styles['navigation-container']}>
				<div className={styles['navigation-text']}>
					<p className={styles.heading}>VAGABOND STUDIOS · BEAUTIFUL CONCRETE DAYLIGHT WITH LARGE WINDOWS IN THE HEART OF LONG ISLAND CITY</p>
					<ul className={styles['nav-link-list']}>
						{links.map((link) => {
							if (link === 'booking') {
								return (
                 <a key={link} href={'https://www.peerspace.com/pages/listings/64652dce7672b6000e6defbe'} className={styles['nav-link']}><li className={styles['link-list']}>{link.toUpperCase()}</li></a>
								);
							}
							return (
								<a key={link} href='#' onClick={(e) => {e.preventDefault(); handleLinkClick(link);}} className={styles['nav-link']}><li className={styles['link-list']}>{link.toUpperCase()}</li></a>
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
							src={close}
							alt="close"
							width={0}
							height={0}
							className={styles['close-icon']}
						/>
					</button>
					<Image
						src={vs}
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
							src={menu}
							alt="menu"
							width={0}
							height={0}
							className={styles.menu}
						/>
					</button>
          <a href="/">
					  <Image
						  src={vs}
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