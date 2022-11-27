import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBoard } from '../../models/IBoard';
import { ICreateBoardData } from '../../models/IInputData';
import { createNewBoard } from '../../service/boards/createBoard';
import { getAllBoards } from '../../service/boards/getAllBoards';
import { getBoardById } from '../../service/boards/getBoardById';
import { updateBoard } from '../../service/boards/updateBoard';
import { updateBoardAssignList } from '../../service/boards/updateBoardAssignList';

export const fetchAllBoards = createAsyncThunk('boards/getAllBoard', async () => {
  return getAllBoards();
});

export const fetchBoard = createAsyncThunk('boards/getBoard', async (id: string) => {
  return getBoardById(id);
});

export const fetchNewBoard = createAsyncThunk(
  'boards/createBoard',
  async (data: ICreateBoardData) => createNewBoard(data)
);
export const fetchUpdateBoard = createAsyncThunk('boards/updateBoard', async (board: IBoard) => {
  return updateBoard(board);
});
export const fetchUpdateBoardAssignList = createAsyncThunk('boards/updateBoard', async () => {
  return updateBoardAssignList();
});
