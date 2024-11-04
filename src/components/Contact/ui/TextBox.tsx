import styles from "./TextBox.module.css";

interface IInput {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

const TextBox = (inputElements: IInput) => {
  const { name, id, placeholder, value, handleChange } = inputElements;
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={styles.textbox}
    />
  );
};

export default TextBox;
