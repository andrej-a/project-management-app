import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const themeSlice = createSlice({
  name: 'application_theme',
  initialState,
  reducers: {
    themeChange: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { themeChange } = actions;
export default reducer;
