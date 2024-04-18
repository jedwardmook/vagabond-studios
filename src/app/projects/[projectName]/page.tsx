'use client';
import { usePathname } from "next/navigation";

export default function Project() {
	const pathName = usePathname();
	const path = pathName.split('/');
	const projectToSearch = path[path.length - 1].replace('-',' ');

	return (
		<main>
			<h1>{projectToSearch}</h1>
		</main>
	);
}