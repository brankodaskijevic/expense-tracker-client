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
    },
    setPostLike (state, action) {
      state.posts = state.posts.map(post => {
        if (action.payload.postId === post._id) {
          return {
            ...post,
            likes: post.likes.concat([action.payload.userId])
          }
        }

        return post
      })
    }
  },
});

export const {
  setPosts,
  setPostLike,
} = postsSlice.actions;

export default postsSlice.reducer;
