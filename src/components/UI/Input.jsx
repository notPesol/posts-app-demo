import styles from "./Input.module.css";

const Input = ({ type, onChange, placeholder, value }) => {
  return (
    <input
      className={styles.input}
      type={type || "text"}
      onChange={onChange || null}
      placeholder={placeholder || ""}
      value={value}
    />
  );
};

export default Input;
