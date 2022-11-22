import { createAsyncThunk } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { useHttp } from '../../hooks/useHttp';
import { IBoard } from '../../models/IBoard';
import { getAllBoards } from '../../service/boards/boardsService';
import { Errors, HttpMetod, path } from '../../service/constants';
import { getCookie } from '../../utils/cookie/getCookie';
import { store } from '../store';

export const ALL_BOARDS_FETCHING = 'ALL_BOARDS_FETCHING';
export const BOARD_FETCHING = 'BOARD_FETCHING';

export const fetchAllBoards = createAsyncThunk(BOARD_FETCHING, async (url: string) => {
  const { request } = useHttp();
  return request(url);
});

export const fetchBoard = createAsyncThunk(BOARD_FETCHING, async () => getAllBoards());
