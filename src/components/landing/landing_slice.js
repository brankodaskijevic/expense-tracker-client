import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUsers: undefined,
  totalBalance: undefined,
  allExpenses: undefined,
  allIncomes: undefined,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneralData (state, action) {
      state.activeUsers = action.payload.activeUsers
      state.totalBalance = action.payload.totalBalance
      state.allExpenses = action.payload.allExpenses
      state.allIncomes = action.payload.allIncomes
    }
  },
});

export const {
  setGeneralData
} = generalSlice.actions;

export default generalSlice.reducer;
