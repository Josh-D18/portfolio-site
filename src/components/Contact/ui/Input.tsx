import styles from "./Input.module.css";

interface IInput {
  name: string;
  id: string;
  placeholder: string;
  type: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = (inputElements: IInput) => {
  const { name, id, placeholder, value, type, handleChange } = inputElements;
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={styles.input}
      required
    />
  );
};

export default Input;
