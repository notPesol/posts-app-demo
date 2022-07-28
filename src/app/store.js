import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [postsSlice.name]: postsSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
