import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
	return (
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
