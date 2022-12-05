import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { setTasks } from '../../slices/taskSlice/taskSlice';
import { ITask } from '../../models/ITask';

const { TYPE, GET } = requests;
const { INVALID_TOKEN } = Errors;

export const getBoardTasks = async (boardId: string): Promise<ITask[]> => {
  const { dispatch } = store;

  try {
    const response = await fetch(`${path.tasks}/${boardId}`, {
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

    const content: ITask[] = await response.json();
    dispatch(setTasks(content));
    return content;
  } catch (err) {
    throw err;
  }
};
