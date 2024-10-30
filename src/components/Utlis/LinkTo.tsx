import Link from "next/link";
import styles from "./cssModules/LinkTo.module.css";

interface ILinkTo {
  path: string;
  content: string;
  parentStyle?: string;
}

const LinkTo = (ILinkTo: ILinkTo) => {
  const { path, content, parentStyle } = ILinkTo;
  return (
    <>
      {path === "" ? (
        <span
          className={`${styles.linkTo} ${parentStyle} ${styles.spacingUnderline}`}
        >
          {content}
        </span>
      ) : (
        <Link
          className={`${styles.linkTo} ${styles.linkToEffect}`}
          href={{ pathname: `${path}` }}
        >
          {content}
        </Link>
      )}
    </>
  );
};

export default LinkTo;
