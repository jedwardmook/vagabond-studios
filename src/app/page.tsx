import styles from "./page.module.css";
import { projects } from "@/api/data";
import Image from "next/image";


export default function Home() {

  const projectsToDisplay = projects.map((project, index) => {
    if (project.portraitOrientation && index === 0 || index === 3) {
      return (
        <figure key={project.projectName} className={styles['project-one-container']}>
          <Image
            src={project.projectImage}
            alt={project.projectName}
            width={0}
            height={0}
            className={styles['project-one-image']}
          />
          <div>
          <p className={styles['project-one-caption']}>
            {project.projectName.toUpperCase()}, <em>{project.projectYear.toUpperCase()}</em>
          </p>
          </div>
        </figure>
      )
    } else if (project.portraitOrientation) {
      return (
        <figure key={project.projectName} className={styles['project-two-container']}>
          <figcaption className={styles['project-two-caption']}>
            {project.projectName.toUpperCase()}, <em>{project.projectYear.toUpperCase()}</em>
          </figcaption>
          <Image
            src={project.projectImage}
            alt={project.projectName}
            width={0}
            height={0}
            className={styles['project-two-image']}
          />
        </figure>
      )
    } else if (!project.portraitOrientation) {
      return (
        <figure key={project.projectName} className={styles['project-three-container']}>
          <figcaption className={styles['project-three-caption']}>
          { project.projectName.toUpperCase()}, <em>{projects[2].projectYear.toUpperCase()}</em>
          </figcaption>
          <Image
            src={project.projectImage}
            alt={project.projectName}
            width={0}
            height={0}
            className={styles['project-three-image']}
          />
        </figure>
      )
    }
  })

  return (
    <main>
      <div className={styles.main}>
        {projectsToDisplay}
        {/* <figure>
          <figcaption className={styles['project-one-caption']}>
            {projects[0].projectName.toUpperCase()}, <em>{projects[0].projectYear.toUpperCase()}</em>
          </figcaption>
          <Image
            src={projects[0].projectImage}
            alt={projects[0].projectName}
            width={0}
            height={0}
            className={styles['project-one-image']}
          />
        </figure>
        <figure className={styles['project-two-caption']}>
          <figcaption>
            {projects[1].projectName.toUpperCase()}, <em>{projects[1].projectYear.toUpperCase()}</em>
          </figcaption>
          <Image
            src={projects[1].projectImage}
            alt={projects[1].projectName}
            width={0}
            height={0}
            className={styles['project-two-image']}
          />
        </figure>
        <figure>
          <figcaption className={styles['project-three-caption']}>
            {projects[2].projectName.toUpperCase()}, <em>{projects[2].projectYear.toUpperCase()}</em>
          </figcaption>
          <Image
            src={projects[2].projectImage}
            alt={projects[2].projectName}
            width={0}
            height={0}
            className={styles['project-three-image']}
          />
        </figure> */}
      </div>
    </main>
  );
}
