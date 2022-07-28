import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, selectPostById } from "../../app/slices/postsSlice";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Wrapper from "../UI/Wrapper";

import styles from './UpdatePostForm.module.css';

const UpdatePostForm = ({ history, location, match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    history.replace("/");
  }

  const [text, setText] = useState(post?.text || "");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(updatePost({ postId: post.id, text }));
      history.replace("/");
    }
  };

  return (
    <Wrapper>
      <form style={{width: "100%"}} onSubmit={onSubmitHandler}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="มึงกำลังคิดอะไรอยู่..."
        />
        <Button className={styles.button} type="submit">Update</Button>
      </form>
    </Wrapper>
  );
};

export default UpdatePostForm;
