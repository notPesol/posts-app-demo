import React from "react";

import { useDispatch } from "react-redux/es/exports";
import { addReaction } from "../../app/slices/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {post.reactions[name]} {emoji}
      </button>
    );
  });

  return <React.Fragment>{reactionButtons}</React.Fragment>;
};

export default ReactionButtons;
