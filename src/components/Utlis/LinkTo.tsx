import Link from "next/link";
import styles from "./cssModules/LinkTo.module.css";

interface ILinkTo {
  path: string;
  content: string;
}

const LinkTo = (ILinkTo: ILinkTo) => {
  const { path, content } = ILinkTo;
  return (
    <Link className={styles.linkTo} href={{ pathname: `${path}` }}>
      {content}
    </Link>
  );
};

export default LinkTo;
