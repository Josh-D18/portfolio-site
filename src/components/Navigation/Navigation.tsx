import Image from "next/image";
import iconMentor from "../../../public/assets/images/frontendmentorIcon.svg";
import iconGithub from "../../../public/assets/images/githubIcon.svg";
import iconLinkedIn from "../../../public/assets/images/linkedInIcon.svg";
import iconTwitter from "../../../public/assets/images/twitterIcon.svg";
import styles from "@/components/Navigation/Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>joshdate</h1>
      <div className={styles.imgContainer}>
        <Image
          src={iconGithub}
          alt="github icon"
          width={19}
          height={19}
          className={styles.img}
        />
        <Image
          src={iconMentor}
          alt="frontend mentor icon"
          width={19}
          height={19}
          className={styles.img}
        />
        <Image
          src={iconLinkedIn}
          alt="linkedin icon"
          width={19}
          height={19}
          className={styles.img}
        />
        <Image
          src={iconTwitter}
          alt="twitter icon"
          width={19}
          height={19}
          className={styles.img}
        />
      </div>
    </header>
  );
};

export default Navigation;
