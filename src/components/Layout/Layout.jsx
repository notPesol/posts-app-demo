import React from "react";
import Header from "../Header/Header";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.layout}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
