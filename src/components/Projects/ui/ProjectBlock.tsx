"use client";
import LinkTo from "@/components/Utlis/LinkTo";
import Image from "next/image";
import styles from "./ProjectBlock.module.css";
import { useState } from "react";
interface IBlock {
  projectTitle: string;
  src: string;
  alt: string;
  linkToButtons: string[][];
  projectTypes: string[];
}

const ProjectBlock: React.FC<IBlock> = (blockInfo: IBlock) => {
  const { projectTitle, src, alt, linkToButtons, projectTypes } = blockInfo;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e: React.MouseEvent) => {
    if (e.type === "mouseenter") {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={src}
          alt={alt}
          width={345}
          height={253}
          className={styles.img}
        />
        <div
          className={`${!isHovered && "2xl:hidden"} ${
            styles.linkToButtonsDesktopContainer
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {linkToButtons.map((info: string[], id: number) => (
            <div className={styles.linkToButtonsSpacing} key={id}>
              <LinkTo path={info[0]} content={info[1]} />
            </div>
          ))}
        </div>
      </div>
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
          <div className={styles.linkToButtonsSpacing} key={id}>
            <LinkTo path={info[0]} content={info[1]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProjectBlock };
