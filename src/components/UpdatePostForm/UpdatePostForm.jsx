import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../app/slices/postsSlice";
import Input from "../UI/Input";

const UpdatePostForm = ({ post }) => {
  const [text, setText] = useState(post?.text || "");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(updatePost({ postId: post.id, text }));
      setText("");
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
