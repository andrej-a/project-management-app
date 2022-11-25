import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { fetchAllTasks } from '../../slices/taskSlice/actions';
import { ICreateCardData } from '../../models/IInputData';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewTask = async (task: ICreateCardData, columnId: string) => {
  const boardId = store.getState().board.currentBoard?._id;
  const userId = store.getState().user.id;
  const { dispatch } = store;

  const newTask = {
    title: task.title,
    order: 0,
    description: task.description,
    userId: userId,
    users: task.assign,
  };

  try {
    const response = await fetch(`${path.boards}/${boardId}/columns/${columnId}/tasks`, {
      method: `${POST}`,
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
    // dispatch(fetchAllTasks({ boardId, columnId }));
  } catch (err) {
    throw err;
  }
};
