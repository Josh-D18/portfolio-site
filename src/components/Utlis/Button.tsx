import styles from "./cssModules/Button.module.css";

interface IButton {
  content: string;
}

const Button = (text: IButton) => {
  const { content } = text;
  return <button className={styles.btn}>{content}</button>;
};

export default Button;
