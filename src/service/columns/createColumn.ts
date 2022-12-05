import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ICreateColumn } from '../../models/IInputData';
import { store } from '../../store/store';
import { fetchAllColumns } from '../../slices/columnSlice/actions';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewColumn = async (column: ICreateColumn) => {
  const { _id } = store.getState().board.currentBoard!;
  const order = Math.max(...store.getState().column.columns.map((column) => column.order), 0);
  const { dispatch } = store;

  const newColumn = {
    title: column.title,
    order: order,
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
