import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    updateColumnTitle: (state, action) => {
      const column = state.columns.find((column) => column._id === action.payload.id);
      if (column) column.title = action.payload.title;
    },
  },
});

const { actions, reducer } = columnSlice;
export const { setColumns, updateColumnTitle } = actions;
export default reducer;
