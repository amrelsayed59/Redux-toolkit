import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - action.payload };
    },
    incByValue: (state, action) => {
        return { ...state, count: state.count + action.payload };
    },
  },
});

export const { increment, decrement, incByValue } = counterSlice.actions;

export default counterSlice.reducer;
