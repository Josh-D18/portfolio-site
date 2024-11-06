import Image from "next/image";
import LinkTo from "../Utlis/LinkTo";
import styles from "@/components/Hero/Hero.module.css";
import image from "../../../public/assets/images/portfolioImages/file.png";
import diploma from "../../../public/assets/images/OntarioCollegeDiploma.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Image
        src={image}
        alt="Portfolio Image"
        width={174}
        height={242}
        className={styles.img}
      />
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>
          Nice to meet you! I&apos;m{" "}
          <LinkTo path="" content="Josh Date." parentStyle={styles.title} />
        </h2>
        <p className={styles.description}>
          Based in Canada Ontario, I&apos;m a front-end developer passionate
          about building accessible web apps that users love.
        </p>
        <div className={styles.linkContainer}>
          <LinkTo path="#path" content="Contact Me" />
          <span className={styles.spacing}></span>
          <LinkTo
            path={"../../../public/assets/images/OntarioCollegeDiploma.png"}
            content="Download Resume"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
