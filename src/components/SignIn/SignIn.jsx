import { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../app/slices/authSlice";

import Wrapper from "../UI/Wrapper";

import Input from "../UI/Input";

import styles from "./SignIn.module.css";
import Button from "../UI/Button";

const SignIn = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // assume
    if (username === "adam" && password === "adam555") {
      dispatch(login({ userId: "1" }));
      history.replace("/");
    } else {
      setError("username or password incorrect!");
    }
  };

  return (
    <Wrapper className={styles["sign-in"]}>
      <h2>Sign-In</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        {error && (
          <span className={styles.error} onClick={() => setError("")}>
            {error}
          </span>
        )}
        <div>
          <label htmlFor="username">Username:</label>
          <Input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <Button className={styles.submit} type="submit">
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignIn;
