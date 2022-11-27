import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { IColumn } from '../../models/IColumn';

const { TYPE, PUT } = requests;
const { INVALID_TOKEN } = Errors;

export const updateColumn = async (title: string, column: IColumn) => {
  const boardId = store.getState().board.currentBoard?._id ?? '';
  const columnId = column._id;
  const order = column.order;

  const newTask = {
    title: title,
    order: order,
  };

  try {
    const response = await fetch(`${path.boards}/${boardId}/columns/${columnId}`, {
      method: `${PUT}`,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: `${TYPE}`,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(newTask),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
  } catch (err) {
    throw err;
  }
};
