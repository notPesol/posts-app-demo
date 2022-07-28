import styles from "./Input.module.css";

const Input = ({ type, onChange, placeholder, value, id }) => {
  return (
    <input
      className={styles.input}
      type={type || "text"}
      onChange={onChange || null}
      placeholder={placeholder || ""}
      value={value}
      id={id}
    />
  );
};

export default Input;
