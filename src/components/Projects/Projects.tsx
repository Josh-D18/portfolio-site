import LinkTo from "../Utlis/LinkTo";
import styles from "./Projects.module.css";
import ProjectBlock from "./ui/ProjectBlock";
import data from "./data/projects.json";

const Projects = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Projects</h2>
        <LinkTo path="/" content="Contact Me" />
      </div>
      <div className={styles.container}>
        {data.map(
          (
            value: {
              projectTitle: string;
              src: string;
              alt: string;
              linkToButtons: string[][];
              projectTypes: string[];
            },
            index: number
          ) => (
            <ProjectBlock
              projectTitle={value.projectTitle}
              src={value.src}
              alt={value.alt}
              linkToButtons={value.linkToButtons}
              projectTypes={value.projectTypes}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
