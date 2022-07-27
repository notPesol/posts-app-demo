import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, selectPostById } from "../../app/slices/postsSlice";
import Input from "../UI/Input";

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
    <section>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="มึงกำลังคิดอะไรอยู่..."
        />
      </form>
    </section>
  );
};

export default UpdatePostForm;
