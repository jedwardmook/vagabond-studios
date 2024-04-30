import Image from "next/image";
import styles from "../app/page.module.css";

type Image = {
  url: string
}

type Project = {
  title: string,
  year: string,
  images: Image[],
}

type Style = {
  figStyle: string,
  captionStyle: string,
  imageStyle: string,
}

type ProjectContainerProps =  Project & Style & {
  handleClick: (title: string) => void
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  title,
  year,
  images,
  figStyle,
  captionStyle,
  imageStyle,
  handleClick,
  }) => {
    return (
      <figure
        key={title}
        className={styles[figStyle]}
        onClick={() => handleClick(title)}
      >
         {captionStyle !== 'project-one-caption' &&
        <div>
          <p className={styles[captionStyle]}>
            {title.toUpperCase()}, <em>{year.toUpperCase()}</em>
          </p>
        </div>}
        <Image
          src={images[0].url}
          alt={title}
          width={1000}
          height={1000}
          className={styles[imageStyle]}
          blurDataURL=''
        />
        {captionStyle === 'project-one-caption' &&
        <div>
          <p className={styles[captionStyle]}>
            {title.toUpperCase()}, <em>{year.toUpperCase()}</em>
          </p>
        </div>}
      </figure>
    );
};

export default ProjectContainer;