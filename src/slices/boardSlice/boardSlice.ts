import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBoards } from '../../store/actions/actions';

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
    pending: (state) => {
      state.isLoading = true;
    },
    rejected: (state) => {
      state.isError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    });
  },
});

const { actions, reducer } = boardSlice;
export const { updateBoardTitle, setCurrentBoard } = actions;
export default reducer;
