import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { ICreateCardData } from '../../models/IInputData';
import { fetchUpdateBoardAssignList } from '../../slices/boardSlice/actions';
import { priorityKey } from '../../constants/priorityKey';

const { TYPE, PUT } = requests;
const { INVALID_TOKEN } = Errors;

export const updateTask = async (task: ICreateCardData) => {
  const boardId = store.getState().board.currentBoard?._id ?? '';
  const userId = store.getState().user.id;
  const columnId = store.getState().task.currentTask?.columnId ?? '';
  const taskId = store.getState().task.currentTask?._id ?? '';
  const order = store.getState().task.currentTask?.order ?? 0;
  const { dispatch } = store;

  const newTask = {
    title: task.title + priorityKey + task.priority,
    order: order,
    description: task.description ?? ' ',
    userId: userId,
    columnId: columnId,
    users: [task.assign],
  };

  try {
    const response = await fetch(`${path.boards}/${boardId}/columns/${columnId}/tasks/${taskId}`, {
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
    dispatch(fetchUpdateBoardAssignList());
  } catch (err) {
    throw err;
  }
};
