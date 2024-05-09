'use client';
import Image from "next/image";
import styles from "./header.module.css";
import useIsAdminRoute from "../app/utils/routeUtils";
import wordmark from '../../public/WORDMARK_BLACK.svg';

export default function Header() {
	const isAdminRoute = useIsAdminRoute();

	return (
		!isAdminRoute &&
		<div className={styles.main}>
			<a href="/">
				<Image
					src={wordmark}
					alt="Vagabond Studios"
					width={0}
					height={0}
					className={styles.logo}
				/>
			</a>
		</div>
	);
}
