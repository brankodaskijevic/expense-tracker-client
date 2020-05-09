import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: undefined
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts (state, action) {
      state.posts = action.payload.data
    }
  },
});

export const {
  setPosts
} = postsSlice.actions;

export default postsSlice.reducer;
