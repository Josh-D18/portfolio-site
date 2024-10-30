import ExperienceBlock from "./ui/ExperienceBlock";
import styles from "./LangExperience.module.css";

const LangExperience = () => {
  return (
    <section className={styles.container}>
      <div className={styles.blockContainer}>
        <ExperienceBlock lang="HTML" content="4 Years Experience" />
        <ExperienceBlock lang="CSS" content="4 Years Experience" />
        <ExperienceBlock lang="Javascript" content="4 Years Experience" />
        <ExperienceBlock lang="Node Js" content="2 Years Experience" />
        <ExperienceBlock lang="React" content="2 Years Experience" />
        <ExperienceBlock lang="Sass" content="2 Years Experience" />
      </div>
    </section>
  );
};
// HTML 4 Years Experience CSS 4 Years Experience JavaScript 4 Years
// Experience Accessibility 4 Years Experience React 3 Years Experience Sass
// 3 Years Experience
export default LangExperience;
