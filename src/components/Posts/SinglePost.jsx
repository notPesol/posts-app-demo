import { Link } from "react-router-dom";

import ReactionButtons from "./ReactionButtons";

import avatar from "../../images/avatar.jpg";
import styles from "./SinglePost.module.css";
import PostAuthor from "./PostAuthor";

const SinglePost = ({ post }) => {
  return (
    <li className={styles.post}>
      <div className={styles.author}>
        <figure>
          <img src={avatar} alt="avater" />
        </figure>
        <PostAuthor userId={post.userId} />
      </div>
      <p>{post.text.substring(0, 100)}</p>
      <div className={styles.actions}>
        <button>View Post</button>
        <button>
          <Link to={`/edit-post/${post.id}`}>Edit Post</Link>
        </button>
        <ReactionButtons post={post} />
      </div>
    </li>
  );
};

export default SinglePost;
