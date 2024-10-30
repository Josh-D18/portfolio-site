import styles from "./ExperienceBlock.module.css";

interface IExpBlock {
  lang: string;
  content: string;
}

const ExperienceBlock = (experience: IExpBlock) => {
  const { lang, content } = experience;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{lang}</h3>
      <p className={styles.description}>{content}</p>
    </div>
  );
};

export default ExperienceBlock;
