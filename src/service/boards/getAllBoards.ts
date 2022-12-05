import { IBoard } from '../../models/IBoard';
import { store } from '../../store/store';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { setBoards, setLoading } from '../../slices/boardSlice/boardSlice';

const { TYPE, GET } = requests;
const { INVALID_TOKEN } = Errors;

export const getAllBoards = async (): Promise<IBoard[]> => {
  const { dispatch } = store;
  const { id } = store.getState().user;

  dispatch(setLoading());

  try {
    const response = await fetch(`${path.boards}`, {
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

    const boards: IBoard[] = await response.json();
    const userBoards = boards.filter(
      (board) => board.owner === id || board.users.includes(id as string)
    );

    dispatch(setBoards(userBoards));
    return boards;
  } catch (err) {
    throw err;
  }
};
