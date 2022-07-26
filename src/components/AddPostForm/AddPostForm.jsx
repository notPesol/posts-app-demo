import { useState } from "react";

import { useDispatch } from "react-redux";
import { addPost } from "../../app/slices/postsSlice";

import avater from "../../images/avatar.jpg";
import styles from "./AddPostForm.module.css";

const AddPostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addPost(text));
      setText("");
    }
  };

  return (
    <section className={styles.addPostForm}>
      <figure>
        <img src={avater} alt="your profile" />
      </figure>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="มึงกำลังคิดอะไรอยู่..."
        />
      </form>
    </section>
  );
};

export default AddPostForm;
