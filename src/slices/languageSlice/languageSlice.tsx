import { createSlice } from '@reduxjs/toolkit';
import { initialState, RussianState } from './initialState';

const languageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {},
});

const { actions, reducer } = languageSlice;
export default reducer;
