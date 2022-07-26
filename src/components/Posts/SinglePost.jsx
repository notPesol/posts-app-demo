import avatar from "../../images/avatar.jpg";
import styles from "./SinglePost.module.css";

const SinglePost = ({ post }) => {
  return (
    <li className={styles.post}>
      <div className={styles.author}>
        <figure>
          <img src={avatar} alt="avater" />
        </figure>
        <span>{post.author}</span>
      </div>
      <p>{post.text}</p>
      <div className={styles.emojies}>
        <button>0 Like</button>
        <button>0 Like</button>
        <button>0 Like</button>
      </div>
    </li>
  );
};

export default SinglePost;
