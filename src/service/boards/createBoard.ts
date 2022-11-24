import { IBoard } from '../../models/IBoard';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ICreateBoardData } from '../../models/IInputData';
import { store } from '../../store/store';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewBoard = async (board: ICreateBoardData) => {
  const { id } = store.getState().user;

  const newBoard = {
    title: board.title,
    owner: id,
    users: [],
  };

  try {
    const response = await fetch(path.boards, {
      method: POST as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: TYPE as string,
      },
      body: JSON.stringify(newBoard),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    const content: IBoard = await response.json();
  } catch (err) {
    throw err;
  }
};
