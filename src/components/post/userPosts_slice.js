import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: undefined
}

const userPostsSlice = createSlice({
  name: 'userPosts',
  initialState,
  reducers: {
    setUsersPosts (state, action) {
      state.posts = action.payload
    }
  }
})

export const {
  setUsersPosts
} = userPostsSlice.actions

export default userPostsSlice.reducer