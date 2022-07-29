const PostAuthor = ({ userId }) => {
  let username = "Unknown author";
  if (userId) {
    // TODO: edit later
    // demo
    if (userId === "1") {
      username = "Adam";
    }
  }

  return <span>{username}</span>;
};

export default PostAuthor;
