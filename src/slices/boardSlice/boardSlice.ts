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

    updateColumnTitle: (state, action) => {
      const column = state.columns.find((column) => column._id === action.payload.id);
      if (column) column.title = action.payload.title;
    },
    updateBoardTitle: (state, action) => {
      const board = state.boards.find((board) => board._id === action.payload.id);
      if (board) board.title = action.payload.title;
    },
    updateTaskInfo: (state, action) => {
      const task = state.tasks.find((task) => task._id === action.payload._id);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
      }
    },

    setCurrentTask: (state, action) => {
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
  updateColumnTitle,
  setCurrentTask,
  updateBoardTitle,
  setCurrentBoard,
  updateTaskInfo,
} = actions;
export default reducer;
