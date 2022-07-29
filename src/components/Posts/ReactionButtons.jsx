import React from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectUserId } from "../../app/slices/authSlice";
import { addReaction } from "../../app/slices/postsSlice";

import Button from "../UI/Button";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
};

const ReactionButtons = ({ post }) => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          // TODO: Edit later
          {
            if (userId) {
              dispatch(
                addReaction({ postId: post.id, reaction: name, userId })
              );
            }
          }
        }
      >
        {post.reactions.emojiie[name]} {emoji}
      </Button>
    );
  });

  return <React.Fragment>{reactionButtons}</React.Fragment>;
};

export default ReactionButtons;
