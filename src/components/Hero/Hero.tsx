import Image from "next/image";
import LinkTo from "../Utlis/LinkTo";
import styles from "@/components/Hero/Hero.module.css";
import image from "../../../public/assets/images/portfolioImages/file.png";

const Hero: React.FC = () => {
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
        <LinkTo path="#path" content="Contact Me" />
      </div>
    </section>
  );
};

export default Hero;
