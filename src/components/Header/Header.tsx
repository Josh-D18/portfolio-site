"use client"
import Image from "next/image";
import iconMentor from "../../../public/assets/images/frontendmentoricon.png"
import iconGithub from "../../../public/assets/images/githubIcon.png"
import iconLinkedIn from "../../../public/assets/images/LinkedInIcon.png"
import iconTwitter from "../../../public/assets/images/twitterIcon.png"
import styles from '@/components/Header/Header.module.css';

const Header: React.FC = () => {
    return (
      <header className={styles.container}>
      <h1 className={styles.title}>Josh Date</h1>
      <div className={styles.imgContainer}>
        <Image src={iconGithub} alt="github icon" width={19} height={19} className={styles.img}></Image>
        <Image src={iconMentor} alt="frontend mentor icon" width={19} height={19} className={styles.img}></Image>
        <Image src={iconLinkedIn} alt="linkedin icon" width={19} height={19} className={styles.img}></Image>
        <Image src={iconTwitter} alt="twitter icon" width={19} height={19} className={styles.img}></Image>
      </div>
      </header>
    )
}


export default Header
