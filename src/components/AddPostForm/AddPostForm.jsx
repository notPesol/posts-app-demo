import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../app/slices/authSlice";
import { addPost } from "../../app/slices/postsSlice";

import avater from "../../images/avatar.jpg";
import Input from "../UI/Input";
import Wrapper from "../UI/Wrapper";
import styles from "./AddPostForm.module.css";

const AddPostForm = () => {
  const [text, setText] = useState("");

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text && userId) {
      dispatch(addPost(text, userId));
      setText("");
    }
  };

  return (
    <Wrapper className={styles.addPostForm}>
      <figure>
        <img src={avater} alt="your profile" />
      </figure>
      <form onSubmit={submitHandler}>
        <Input
          placeholder="คุณกำลังคิดอะไรอยู่..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
