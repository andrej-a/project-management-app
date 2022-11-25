import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ICreateColumn } from '../../models/IInputData';
import { store } from '../../store/store';
import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { fetchAllColumns } from '../../slices/columnSlice/actions';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewColumn = async (column: ICreateColumn) => {
  const { _id } = store.getState().board.currentBoard!;
  const { dispatch } = store;

  const newColumn = {
    title: column.title,
    order: 0,
  };

  try {
    const response = await fetch(`${path.boards}/${_id}/columns`, {
      method: `${POST}`,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: `${TYPE}`,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(newColumn),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    dispatch(fetchAllColumns(_id));
  } catch (err) {
    throw err;
  }
};
