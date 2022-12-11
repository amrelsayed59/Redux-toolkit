import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk('user/add', async (user) => {
  const res = await axios.post('http://localhost:5000/api/users', user);
  return res.data;
});

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {
      name: '',
      email: '',
    },
    loading: false,
    error: false,
  },
  reducers: {
  },
  extraReducers: {
    [addUser.pending]: (state) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    [addUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
