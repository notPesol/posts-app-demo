import React from "react";

import { useDispatch } from "react-redux/es/exports";
import { addReaction } from "../../app/slices/postsSlice";

import Button from "../UI/Button";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          // TODO: Edit later
          dispatch(
            addReaction({ postId: post.id, reaction: name, userId: null })
          )
        }
      >
        {post.reactions.emojiie[name]} {emoji}
      </Button>
    );
  });

  return <React.Fragment>{reactionButtons}</React.Fragment>;
};

export default ReactionButtons;
