'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { projectId, dataset, apiVersion } from "../../../../sanity/env";
import { createClient, groq } from "next-sanity";
import styles from './project.module.css';
import Image from "next/image";

type Image = {
	url: string,
}

type Project = {
	title: string,
	artist: string,
	year: string,
	images: Image[],
	description: string,
	mediums: string[],
}

export default function Project() {
	const [project, setProject] = useState<Project>();
	const pathName = usePathname();
	const path = pathName.split('/');
	const projectToSearch = path[path.length - 1]
		.replace('-',' ')
		.replace(/\b\w/g, (match) => match.toUpperCase());

	useEffect(() => {
		const fetchProject = async () => {
		  if (projectToSearch) {
			const client = createClient({
			  projectId,
			  dataset,
			  apiVersion
			});

			const query = groq`*[_type == 'project' && title == $title][0] {
			  _id,
			  _createdAt,
			  title,
			  artist,
			  year,
			  mediums,
			  images[] {
				"url": asset->url
			  },
			  description,
			}`;

			const data = await client.fetch(query, { title: projectToSearch });
			setProject(data);
		  }
		};
		fetchProject();
	  }, [projectToSearch]);

	  const projectsImages = project?.images?.map(image => {
		return (
			<div key={image.url}>
				<Image
				  src={image.url}
				  alt="Image"
				  width={1000}
				  height={1000}
				  className={styles['project-image']}
				/>
			</div>
		);
	  });

	return (
		<main className={styles['project-main']}>
			<div className={styles['project-container']}>
				<div className={styles['project-info']}>
					<h1 className={styles['project-title']}>{project?.title.toUpperCase()}</h1>
					<h4 className={styles['project-artist']}><strong><em>{project?.artist}, {project?.year}</em></strong></h4>
					<p className={styles['project-mediums']}>{project?.mediums.join(", ")}</p>
					<p className={styles['project-description']}>{project?.description}</p>
				</div>
				{projectsImages}
			</div>
		</main>
	);
}