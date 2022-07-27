import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle", // -> "idle" | "loading" | "succeeded" | "failed",
  error: null, // -> null | string
};

const initialReactions = {
  emojiie: {
    thumbsUp: 0,
    hooray: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  userIds: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  // TODO: Edit later
  const response = await fetch("/fakeApi/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (text, userId) => {
        return {
          payload: {
            id: nanoid(),
            text,
            userId: userId || null,
            reactions: initialReactions,
          },
        };
      },
    },
    updatePost: (state, action) => {
      const { postId, text } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.text = text;
      }
    },
    addReaction: (state, action) => {
      const { postId, reaction, userId } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        const existingUerId = existingPost.reactions.userIds.find(
          (postUserId) => {
            return postUserId === userId;
          }
        );
        if (!existingUerId) {
          existingPost.reactions.userIds.push(userId);
          existingPost.reactions.emojiie[reaction]++;
        } else {
          existingPost.reactions.userIds =
            existingPost.reactions.userIds.filter(
              (postUserId) => postUserId !== userId
            );
          existingPost.reactions.emojiie[reaction]--;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = state.posts.concat(action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPost, updatePost, addReaction } = postsSlice.actions;

export default postsSlice;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);
