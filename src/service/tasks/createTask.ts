import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { fetchAllTasks } from '../../slices/taskSlice/actions';
import { ICreateCardData } from '../../models/IInputData';
import { fetchUpdateBoardAssignList } from '../../slices/boardSlice/actions';
import { priorityKey } from '../../constants/priorityKey';

const { TYPE, POST } = requests;
const { INVALID_TOKEN } = Errors;

export const createNewTask = async (task: ICreateCardData) => {
  const boardId = store.getState().board.currentBoard?._id ?? '';
  const userId = store.getState().user.id;
  const columnId = store.getState().task.newTaskColumnId ?? '';
  const tasks = [...store.getState().task.tasks].filter((task) => task.columnId === columnId);
  const order = !!tasks.length ? tasks.sort((a, b) => b.order - a.order)[0].order + 1 : 0;
  const { dispatch } = store;
  const newTask = {
    title: task.title + priorityKey + task.priority,
    order: order,
    description: task.description ?? ' ',
    userId: userId,
    users: [task.assign],
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
    await dispatch(fetchAllTasks({ boardId }));
    dispatch(fetchUpdateBoardAssignList());
  } catch (err) {
    throw err;
  }
};
