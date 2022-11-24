import { IBoard } from '../../models/IBoard';
import { store } from '../../store/store';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { IColumn } from '../../models/IColumn';
import { setColumns } from '../../slices/columnSlice/columnSlice';

const { TYPE, GET } = requests;
const { INVALID_TOKEN } = Errors;

export const getAllColumns = async (id: string): Promise<IColumn[]> => {
  const { dispatch } = store;

  try {
    const response = await fetch(`${path.boards}/${id}/columns`, {
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

    const columns: IColumn[] = await response.json();
    dispatch(setColumns(columns));
    return columns;
  } catch (err) {
    throw err;
  }
};
