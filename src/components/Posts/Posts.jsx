import { useSelector } from "react-redux";

import SinglePost from "./SinglePost";

import styles from "./Posts.module.css";
import { selectAllPosts } from "../../app/slices/postsSlice";
import Wrapper from "../UI/Wrapper";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return <SinglePost key={post.id} post={post} />;
  });

  return (
    <Wrapper>
      <ul className={styles['posts-list']}>{renderedPosts}</ul>
    </Wrapper>
  );
};

export default Posts;
