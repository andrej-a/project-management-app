import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
});

const { actions, reducer } = languageSlice;
export default reducer;
