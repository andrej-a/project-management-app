import { IBoard } from '../../models/IBoard';
import { store } from '../../store/store';
import { Errors, HttpMetod, path } from '../constants';
import { getCookie } from '../../utils/cookie/getCookie';

// interface IBoard {
//   _id: '6376a7607a0a06b9b7c6db66';
//   title: 'Board2';
//   owner: 'Liza';
//   users: ['Nastya'];
// }

const { GET, POST, DELETE, PUT, PATCH, CONTENT_TYPE } = HttpMetod;

export const getAllBoards = async (): Promise<IBoard[]> => {
  const { id } = store.getState().user;

  try {
    const response = await fetch(`${path.boards}`, {
      method: GET,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: CONTENT_TYPE,
      },
    });

    if (response.status === Errors.INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    const boards: IBoard[] = await response.json();
    boards.filter((board) => board.owner === id || board.users.includes(id));
    return boards;
  } catch (err) {
    throw err;
  }
};

export const getBoardById = async (boardId: string): Promise<IBoard> => {
  try {
    const response = await fetch(`${path.boards}/${boardId}`, {
      method: GET,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: CONTENT_TYPE,
      },
    });

    if (response.status === Errors.INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    const content: IBoard = await response.json();
    return content;
  } catch (err) {
    throw err;
  }
};
