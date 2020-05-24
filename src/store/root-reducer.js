import { combineReducers } from '@reduxjs/toolkit'
import generalSlice from '../components/landing/landing_slice'
import postsSlice from '../components/main/main_slice'
import userSlice from '../components/profile/profile_slice'
import transactionsSlice from '../components/transactions-table/transaction_slice'
import userPostsSlice from '../components/post/userPosts_slice'
import catagoryExpensesSlice from '../components/profile/expenses_slice'
import userStatsSlice from '../components/profile/userstats_slice'

const rootReducers = combineReducers({
  general: generalSlice,
  posts: postsSlice,
  user: userSlice,
  transactions: transactionsSlice,
  userPosts: userPostsSlice,
  categoryExpenses: catagoryExpensesSlice,
  userStats: userStatsSlice
})

export default rootReducers