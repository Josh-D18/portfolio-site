import Link from "next/link";
import styles from "./cssModules/LinkTo.module.css";
import { StaticImageData } from "next/image";

interface ILinkTo {
  path: string | StaticImageData;
  content: string;
  parentStyle?: string;
}

const LinkTo: React.FC<ILinkTo> = (ILinkTo: ILinkTo) => {
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
