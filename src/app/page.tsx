'use client';
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import ProjectsContext from "./context/projectsContext";

type Image = {
  url: string
}

type Project = {
  title: string,
  year: string,
  images: Image[],
}

export default function Home() {
  const { projects } = useContext(ProjectsContext);
  const router = useRouter();

  const handleClick = (project: Project) => {
    router.push(`/projects/${project.title.toLowerCase().replace(" ","-")}`);
  };

  const projectsToDisplay = projects.map((project: Project) => {
    return (
      <figure
        key={project.title}
        className={styles['project-one-container']}
        onClick={() => handleClick(project)}
      >
        <Image
          src={project.images[0].url}
          alt={project.title}
          width={1000}
          height={1000}
          className={styles['project-one-image']}
          blurDataURL=""
        />
        <div>
          <p className={styles['project-one-caption']}>
            {project.title.toUpperCase()}, <em>{project.year.toUpperCase()}</em>
          </p>
        </div>
      </figure>
    );
  });

  // const projectsToDisplay = projects.map((project, index) => {
  // 	if (project.portraitOrientation && index === 0 || index === 3) {
  // 		return (
  // 			<figure key={project.projectName} className={styles['project-one-container']}>
  // 				<Image
  // 					src={project.projectImage}
  // 					alt={project.projectName}
  // 					width={0}
  // 					height={0}
  // 					className={styles['project-one-image']}
  // 				/>
  // 				<div>
  // 					<p className={styles['project-one-caption']}>
  // 						{project.projectName.toUpperCase()}, <em>{project.projectYear.toUpperCase()}</em>
  // 					</p>
  // 				</div>
  // 			</figure>
  // 		);
  // 	} else if (project.portraitOrientation) {
  // 		return (
  // 			<figure key={project.projectName} className={styles['project-two-container']}>
  // 				<figcaption className={styles['project-two-caption']}>
  // 					{project.projectName.toUpperCase()}, <em>{project.projectYear.toUpperCase()}</em>
  // 				</figcaption>
  // 				<Image
  // 					src={project.projectImage}
  // 					alt={project.projectName}
  // 					width={0}
  // 					height={0}
  // 					className={styles['project-two-image']}
  // 				/>
  // 			</figure>
  // 		);
  // 	} else if (!project.portraitOrientation) {
  // 		return (
  // 			<figure key={project.projectName} className={styles['project-three-container']}>
  // 				<figcaption className={styles['project-three-caption']}>
  // 					{ project.projectName.toUpperCase()}, <em>{projects[2].projectYear.toUpperCase()}</em>
  // 				</figcaption>
  // 				<Image
  // 					src={project.projectImage}
  // 					alt={project.projectName}
  // 					width={0}
  // 					height={0}
  // 					className={styles['project-three-image']}
  // 				/>
  // 			</figure>
  // 		);
  // 	}
  // });

  return (
    <main>
      <div className={styles.main}>
        {projectsToDisplay}
      </div>
    </main>
  );
}
