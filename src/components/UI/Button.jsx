import styles from "./Button.module.css";

const Button = ({ type, children, onClick, className }) => {
  const classes = `${styles.button} ${className}`;

  return (
    <button
      className={classes}
      type={type || "button"}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
};

export default Button;
