'use client';
import Image from "next/image";
import styles from "./header.module.css";
import useIsAdminRoute from "../app/utils/routeUtils";

export default function Header() {
	const isAdminRoute = useIsAdminRoute();

	return (
		!isAdminRoute &&
		<div className={styles.main}>
			<a href="/">
				<Image
					src={`WORDMARK_BLACK.svg`}
					alt="Vagabond Studios"
					width={0}
					height={0}
					className={styles.logo}
				/>
			</a>
		</div>
	);
}
