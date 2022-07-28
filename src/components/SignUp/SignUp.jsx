import Wrapper from "../UI/Wrapper";

import Input from "../UI/Input";

import styles from "./SignUp.module.css";
import Button from "../UI/Button";

const SignUp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className={styles["sign-up"]}>
      <h2>Sign-Up</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <div>
          <label htmlFor="username">Username:</label>
          <Input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="re-password">Re-Password:</label>
          <Input type="password" id="re-password" />
        </div>
        <Button className={styles.submit} type="submit">
          Confirm
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignUp;
