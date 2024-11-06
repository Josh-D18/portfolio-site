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

  const isDownloadableFile = typeof path === "string" && path.endsWith(".pdf");

  return (
    <>
      {path === "" ? (
        <span
          className={`${styles.linkTo} ${parentStyle} ${styles.spacingUnderline}`}
        >
          {content}
        </span>
      ) : isDownloadableFile ? (
        <a
          href={path}
          download
          className={`${styles.linkTo} ${styles.linkToEffect}`}
        >
          {content}
        </a>
      ) : (
        <Link
          href={{ pathname: `${path}` }}
          className={`${styles.linkTo} ${styles.linkToEffect}`}
        >
          {content}
        </Link>
      )}
    </>
  );
};

export default LinkTo;
