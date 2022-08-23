import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (reqBody, thunkAPI) => {
    // TODO: Edit later
    const response = await fetch("https://www.some-domain/api/auth", {
      method: "POST",
      body: JSON.stringify({
        username: reqBody.username,
        password: reqBody.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null, // -> string | null,
    isLoggedIn: false,
    status: "idle", // -> 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null, // -> string | null
  },
  reducers: {
    login: (state, action) => {
      const { userId } = action.payload;
      state.isLoggedIn = true;
      state.userId = userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { userId } = action.payload;
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.userId = userId;
      });
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = state => state.auth;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserId = (state) => state.auth.userId;
export const selectStatus = (state) => state.auth.status;

export default authSlice;
