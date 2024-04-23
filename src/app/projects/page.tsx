'use client';
import styles from "./projects.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import ProjectsContext from "../context/projectsContext";

type Image = {
  url: string,
}

type Project = {
  artist: string,
  title: string,
  year: string,
  images: Image[],
  mediums: string[],
}

const formatMediums = (mediums: string[]) => {
  return mediums.join(', ');
};

export default function Projects() {
  const { projects } = useContext(ProjectsContext);
  const [displayImage, setDisplayImage] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (projects.length > 0) {
      setDisplayImage(projects[0].images[0].url);
    }
  }, [projects]);

  const handleMouseEnter = (url: string) => {
    setDisplayImage(url);
  };

  const handleClick = (project: Project) => {
    router.push(`/projects/${project.title.toLowerCase().replace(" ","-")}`);
  };

  return (
    <main className={styles['projects-main']}>
      <div className={styles['display-image-container']}>
        <Image
          src={displayImage}
          alt="Project"
          width={1000}
          height={1000}
          className={styles['display-image']}
        />
      </div>
      <div className={styles['projects-container']}>
        {projects.map(project => {
          return (
            <div
              className={styles['project-container']}
              onMouseEnter={() => handleMouseEnter(project.images[0].url)}
              key={project.title}
              onClick={() => handleClick(project)}
            >
              <div className={styles['project-title']}>
                {project.title.toUpperCase()}
              </div>
              <div>
                <div>
                  <em>{`${project.artist}, ${project.year}`}</em>
                </div>
                <div>
                  {formatMediums(project.mediums)}
                </div>
              </div>
            </div>
            );
        })}
      </div>
    </main>
    );
};