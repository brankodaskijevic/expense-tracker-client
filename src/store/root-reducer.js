import { combineReducers } from '@reduxjs/toolkit'
import generalSlice from '../components/landing/landing_slice'
import postsSlice from '../components/main/main_slice'

const rootReducers = combineReducers({
  general: generalSlice,
  posts: postsSlice
})

export default rootReducers