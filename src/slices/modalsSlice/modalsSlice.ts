import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const themeSlice = createSlice({
  name: 'modals_state',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.modalsState = action.payload;
    },
    setWarningMessage: (state, action) => {
      state.warningMessage = action.payload;
    },
    setLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { setStatus, setWarningMessage, setLoadingState } = actions;
export default reducer;
