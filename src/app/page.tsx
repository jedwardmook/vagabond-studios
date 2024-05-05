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
    let captionStyle = '';
    let imageStyle = '';

    if (index === 0) {
      imageStyle = 'project-one-image';
      captionStyle = 'project-one-caption';
      figStyle = 'project-one-container';
    } else if (index === 1) {
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

  return (
    <main>
      <div className={styles.main}>
        {projectsToDisplay}
      </div>
    </main>
  );
}
