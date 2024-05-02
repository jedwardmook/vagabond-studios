'use client';
import { usePathname, useRouter } from "next/navigation";
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
  const [prevProject, setPrevProject] = useState<Project>();
  const [nextProject, setNextProject] = useState<Project>();
  const pathName = usePathname();
  const router = useRouter();
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
			  title,
			  artist,
			  year,
			  mediums,
			  images[] {
				"url": asset->url
			  },
			  description,
        "prevProject": *[_type == "project" && _createdAt < ^._createdAt] | order(_createdAt desc) [0] {
          title,
        },
        "nextProject": *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc) [0] {
          title,
        }
			}`;

			const data = await client.fetch(query, { title: projectToSearch });
			setProject(data);
      setNextProject(data.nextProject);
      setPrevProject(data.prevProject);
		  }
		};
		fetchProject();
	}, [projectToSearch]);

	const projectsImages = project?.images?.map((image, index) => {
    let className = `project-image-${index + 1}`;

		return (
				<Image
				  src={image.url}
				  alt="Image"
				  width={1000}
				  height={1000}
				  className={styles[className]}
          key={image.url}
				/>
		);
	});

  const handleNextProject = () => {
    router.push(`/projects/${nextProject?.title?.toLowerCase().replace(" ","-")}`);
  };

  const handlePreviousProject = () => {
    router.push(`/projects/${prevProject?.title?.toLowerCase().replace(" ","-")}`);
  };

	return (
		<main className={styles['project-main']}>
			<div className={styles['project-container']}>
				<div className={styles['project-info-container']}>
					<h1 className={styles['project-title']}>{project?.title.toUpperCase()}</h1>
					<h4 className={styles['project-artist']}><strong><em>{project?.artist}, {project?.year}</em></strong></h4>
					<p className={styles['project-mediums']}>{project?.mediums.join(", ")}</p>
					<p className={styles['project-description']}>{project?.description}</p>
				</div>
				{projectsImages}
			</div>
			<div className={styles['buttons-container']}>
				<button
          className={styles['pagination-button']}
          onClick={() => handlePreviousProject()}
          disabled={prevProject === null}
        >PREVIOUS PROJECT</button>
				<button
          className={styles['pagination-button']}
          onClick={() => handleNextProject()}
          disabled={nextProject === null}
        >NEXT PROJECT</button>
			</div>
		</main>
	);
}