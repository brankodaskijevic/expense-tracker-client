import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalIncomes: undefined,
  totalExpenses: undefined,
  totalBalance: undefined
};

const userStatsSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setUserStats (state, action) {
      state.totalIncomes = action.payload.totalIncomes
      state.totalExpenses = action.payload.totalExpenses
      state.totalBalance = action.payload.totalBalance
    }
  },
});

export const {
  setUserStats
} = userStatsSlice.actions;

export default userStatsSlice.reducer;
