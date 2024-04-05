'use client';
import styles from "./projects.module.css";
import { projects } from "@/api/data";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function Projects() {
	const [displayImage, setDisplayImage] = useState(projects[0].projectImage);

	const handleMouseEnter = (image: StaticImageData) => {
		setDisplayImage(image);
	};

	return (
		<main className={styles['projects-main']}>
			<div className={styles['display-image-container']}>
				<Image
					src={displayImage}
					alt="Project"
					width={0}
					height={0}
					className={styles['display-image']}
				/>
			</div>
			<div className={styles['projects-container']}>
				{projects.map((project) => {
					return (
						<div
							className={styles['project-container']}
							onMouseEnter={() => handleMouseEnter(project.projectImage)}
							key={project.projectName}
						>
							<div className={styles['project-title']}>
								{project.projectName.toUpperCase()}
							</div>
							<div>
								<div>
									<em>{`${project.projectArtist}, ${project.projectYear}`}</em>
								</div>
								<div>
									{project.mediums.map((medium, index) => {
										if (index != project.mediums.length - 1)
											return `${medium}, `;
										else
											return `${medium}`;
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}