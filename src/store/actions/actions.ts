import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';
import { IBoard } from '../../models/IBoard';
import { getAllBoards } from '../../service/boards/boardsService';
import { Errors, HttpMetod, path } from '../../service/constants';
import { getCookie } from '../../utils/cookie/getCookie';
import { store } from '../store';

export const ALL_BOARDS_FETCHING = 'ALL_BOARDS_FETCHING';
export const BOARD_FETCHING = 'BOARD_FETCHING';

export const fetchAllBoards = createAsyncThunk(BOARD_FETCHING, async (url: string) => {
  const id = store.getState().user.id;
  const { request } = useHttp();
  return request(url).then((data) =>
    data.filter((board: IBoard) => {
      if (board.owner === id || board.users.includes(id)) return board;
    })
  );
});

export const fetchBoard = createAsyncThunk(BOARD_FETCHING, async () => getAllBoards());
