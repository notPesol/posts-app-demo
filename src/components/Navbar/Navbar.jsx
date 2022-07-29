import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, logout } from "../../app/slices/authSlice";

import styles from "./Navbar.module.css";
import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </React.Fragment>
        )}
        {isLoggedIn && (
          <li>
            <Button className={styles["logout-btn"]} onClick={logoutHandler}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
