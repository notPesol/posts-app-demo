import Wrapper from "../UI/Wrapper";

import Input from "../UI/Input";

import styles from "./SignIn.module.css";
import Button from "../UI/Button";

const SignIn = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className={styles["sign-in"]}>
      <h2>Sign-In</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <div>
          <label htmlFor="username">Username:</label>
          <Input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input type="password" id="password" />
        </div>
        <Button className={styles.submit} type="submit">
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignIn;
