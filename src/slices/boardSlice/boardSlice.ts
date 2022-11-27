import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateBoardTitle: (state, action) => {
      const board = state.boards.find((board) => board._id === action.payload.id);
      if (board) board.title = action.payload.title;
    },
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
    setEditBoard: (state, action) => {
      state.editBoard = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setBoards: (state, action) => {
      state.boards = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = boardSlice;
export const { updateBoardTitle, setCurrentBoard, setEditBoard, setBoards, setLoading } = actions;
export default reducer;
