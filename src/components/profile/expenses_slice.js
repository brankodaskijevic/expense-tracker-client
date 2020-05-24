import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: undefined
}

const catagoryExpensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setCatgoryExpenses (state, action) {
      state.expenses = action.payload
    }
  },
});

export const {
  setCatgoryExpenses
} = catagoryExpensesSlice.actions;

export default catagoryExpensesSlice.reducer;