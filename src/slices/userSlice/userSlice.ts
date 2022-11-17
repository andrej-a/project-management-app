import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

const { actions, reducer } = userSlice;
export default reducer;
