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
    updateBoardTitle: (state, action) => {
      const board = state.boards.find((board) => board._id === action.payload.id);
      if (board) board.title = action.payload.title;
    },
    setCurrentCard: (state, action) => {
      state.currentTask = action.payload;
    },
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
  },
});

const { actions, reducer } = boardSlice;
export const {
  setTasks,
  setColumns,
  updateTask,
  updateColumnTitle,
  setCurrentCard,
  updateBoardTitle,
  setCurrentBoard,
} = actions;
export default reducer;
