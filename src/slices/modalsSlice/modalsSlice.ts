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
    setDeletingValue: (state, action) => {
      state.deletingValue = action.payload;
    },
    setRequestUrl: (state, action) => {
      state.requestURL = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { setStatus, setWarningMessage, setLoadingState, setDeletingValue, setRequestUrl } =
  actions;
export default reducer;
