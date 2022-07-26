import styles from "./Posts.module.css";
import SinglePost from "./SinglePost";

const dummyPosts = [
  {
    id: "1",
    author: "Adam Winter",
    text: "Hi, I am Adam!",
    reactions: {
      // TODO: Edit later
    },
  },
  { id: "2", author: "John Lazy", text: "Hi, I am John!" },
  { id: "1", author: "Gorge Crazy", text: "Hi, I am Gorge!" },
];

const Posts = () => {
  const renderedPosts = dummyPosts.map((post) => {
    return <SinglePost key={post.id} post={post} />;
  });

  return (
    <section className={styles.posts}>
      <ul>{renderedPosts}</ul>
    </section>
  );
};

export default Posts;
