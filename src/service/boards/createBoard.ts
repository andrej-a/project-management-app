import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ICreateBoardData } from '../../models/IInputData';
import { store } from '../../store/store';
import { fetchAllBoards } from '../../slices/boardSlice/actions';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewBoard = async (board: ICreateBoardData) => {
  const { id } = store.getState().user;
  const { dispatch } = store;

  const newBoard = {
    title: board.title,
    owner: id,
    users: [],
  };

  try {
    const response = await fetch(`${path.boards}`, {
      method: `${POST}`,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: `${TYPE}`,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(newBoard),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    dispatch(fetchAllBoards());
  } catch (err) {
    throw err;
  }
};
