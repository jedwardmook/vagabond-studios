'use client';
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import ProjectsContext from "./context/projectsContext";
import ProjectContainer from "@/Components/ProjectContainer";

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

  const handleClick = (title: string) => {
    router.push(`/projects/${title.toLowerCase().replace(" ","-")}`);
  };

  const projectsToDisplay = projects.slice(0,6).map((project: Project, index) => {
    let figStyle = '';
    let captionStyle='';
    let imageStyle='';

    if (index === 0){
      imageStyle = 'project-one-image';
      captionStyle = 'project-one-caption';
      figStyle = 'project-one-container';
    } else if (index === 1){
      imageStyle = 'project-two-image';
      captionStyle = 'project-two-caption';
      figStyle = 'project-two-container';
    } else if (index === 2) {
      imageStyle = 'project-three-image';
      captionStyle = 'project-three-caption';
      figStyle = 'project-three-container';
    } else if (index === 3) {
      imageStyle = 'project-four-image';
      captionStyle = 'project-four-caption';
      figStyle = 'project-four-container';
    } else if (index === 4) {
      imageStyle = 'project-five-image';
      captionStyle = 'project-five-caption';
      figStyle = 'project-five-container';
    } else if (index === 5) {
      imageStyle = 'project-six-image';
      captionStyle = 'project-six-caption';
      figStyle = 'project-six-container';
    }

    return (
      <ProjectContainer
        key={project.title}
        title={project.title}
        year={project.year}
        images={project.images}
        figStyle={figStyle}
        captionStyle={captionStyle}
        imageStyle={imageStyle}
        handleClick={handleClick}
      />
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
