import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateBoardData } from '../../models/IInputData';
import { createNewBoard } from '../../service/boards/createBoard';
import { getAllBoards } from '../../service/boards/getAllBoards';
import { getBoardById } from '../../service/boards/getBoardById';

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
