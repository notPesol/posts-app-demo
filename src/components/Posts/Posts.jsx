import { useSelector } from "react-redux";

import SinglePost from "./SinglePost";

import styles from "./Posts.module.css";
import { selectAllPosts } from "../../app/slices/postsSlice";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return <SinglePost key={post.id} post={post} />;
  });

  return (
    <section className={styles.posts}>
      <ul>{renderedPosts}</ul>
    </section>
  );
};

export default Posts;
