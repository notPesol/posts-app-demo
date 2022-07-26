import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
