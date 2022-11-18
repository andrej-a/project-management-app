import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const themeSlice = createSlice({
  name: 'modals_state',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.modalsState = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { setStatus } = actions;
export default reducer;
