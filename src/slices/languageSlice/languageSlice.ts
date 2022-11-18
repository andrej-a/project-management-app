import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    langChange: (state, action) => {
      state.lang = action.payload;
    },
  },
});

const { actions, reducer } = languageSlice;
export const { langChange } = actions;
export default reducer;
