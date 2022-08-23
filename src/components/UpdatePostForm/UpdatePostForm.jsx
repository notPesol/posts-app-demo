import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, selectPostById } from "../../app/slices/postsSlice";
import { selectAuth } from "../../app/slices/authSlice";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Wrapper from "../UI/Wrapper";

import styles from "./UpdatePostForm.module.css";

const UpdatePostForm = ({ history, location, match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));
  const auth = useSelector(selectAuth);

  const { isLoggedIn, userId } = auth;

  const [text, setText] = useState(post?.text || "");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(updatePost({ postId: post.id, text }));
      history.replace("/");
    }
  };

  useEffect(() => {
    if (!post || !isLoggedIn || post.userId !== userId) {
      history.replace("/");
    }
  }, [history, isLoggedIn, post, userId]);

  let content = (
    <form style={{ width: "100%" }} onSubmit={onSubmitHandler}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="มึงกำลังคิดอะไรอยู่..."
      />
      <Button className={styles.button} type="submit">
        Update
      </Button>
    </form>
  );
  if (!post || !isLoggedIn || post.userId !== userId) {
    content = <h2>Access denied.</h2>;
  }

  return <Wrapper>{content}</Wrapper>;
};

export default UpdatePostForm;
