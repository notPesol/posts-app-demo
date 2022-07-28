import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className }) => {
  const classes = `${styles.wrapper} ${className && className}`;

  return <section className={classes}>{children}</section>;
};

export default Wrapper;
