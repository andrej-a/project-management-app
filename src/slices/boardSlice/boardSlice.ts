import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    updateTask: (state, action) => {
      state.tasks[action.payload.index].order = action.payload.order;
      state.tasks[action.payload.index].columnId = action.payload.columnId;
    },
    updateColumnTitle: (state, action) => {
      const column = state.columns.find((column) => column._id === action.payload.id);
      if (column) column.title = action.payload.title;
    },
  },
});

const { actions, reducer } = boardSlice;
export const { setTasks, setColumns, updateTask, updateColumnTitle } = actions;
export default reducer;
