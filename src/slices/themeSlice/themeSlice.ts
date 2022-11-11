import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const themeSlice = createSlice({
  name: 'application_theme',
  initialState,
  reducers: {},
});

const { actions, reducer } = themeSlice;
export default reducer;
