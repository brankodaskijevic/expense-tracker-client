import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: undefined
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions (state, action) {
      state.transactions = action.payload
    }
  }
})

export const {
  setTransactions
} = transactionsSlice.actions

export default transactionsSlice.reducer