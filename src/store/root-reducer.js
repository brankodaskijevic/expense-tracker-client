import { combineReducers } from '@reduxjs/toolkit'
import generalSlice from '../components/landing/landing_slice'

const rootReducers = combineReducers({
  general: generalSlice
})

export default rootReducers