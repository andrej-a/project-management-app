import { IBoard } from '../../models/IBoard';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { setCurrentBoard } from '../../slices/boardSlice/boardSlice';
import { store } from '../../store/store';

const { TYPE, GET } = requests;
const { INVALID_TOKEN } = Errors;

export const getBoardById = async (boardId: string): Promise<IBoard> => {
  const { dispatch } = store;

  try {
    const response = await fetch(`${path.boards}/${boardId}`, {
      method: GET as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: TYPE as string,
      },
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }

    if (!response.ok) {
      throw new Error('Something wrong!');
    }

    const content: IBoard = await response.json();
    dispatch(setCurrentBoard(content));
    return content;
  } catch (err) {
    throw err;
  }
};
