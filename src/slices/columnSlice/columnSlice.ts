import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
      state.isLoading = false;
    },
    updateColumnTitle: (state, action) => {
      const column = state.columns?.find((column) => column._id === action.payload.id);
      if (column) column.title = action.payload.title;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { actions, reducer } = columnSlice;
export const { setColumns, updateColumnTitle, setLoading } = actions;
export default reducer;
