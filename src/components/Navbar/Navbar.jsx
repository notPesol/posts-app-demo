import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
