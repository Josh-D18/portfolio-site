import LinkTo from "@/components/Utlis/LinkTo";
import Image from "next/image";
import styles from "./ProjectBlock.module.css";
interface IBlock {
  projectTitle: string;
  src: string;
  alt: string;
  linkToButtons: string[][];
  projectTypes: string[];
}

const ProjectBlock = (blockInfo: IBlock) => {
  const { projectTitle, src, alt, linkToButtons, projectTypes } = blockInfo;

  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={alt}
        width={345}
        height={253}
        className={styles.img}
      />
      <div>
        <h3 className={styles.title}>{projectTitle}</h3>
        <div className={styles.typesContainer}>
          {projectTypes.map((type, id) => (
            <p key={id} className={styles.type}>
              {type}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.linkToButtonsContainer}>
        {linkToButtons.map((info: string[], id: number) => (
          <div className={styles.linkToButtonsSpacing}>
            <LinkTo path={info[0]} content={info[1]} key={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBlock;
