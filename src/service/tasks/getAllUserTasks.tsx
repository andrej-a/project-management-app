import { getCookie } from '../../utils/cookie/getCookie';
import { path, requests } from '../../models/requests';
import { store } from '../../store/store';
import { setAllUserTasks } from '../../slices/taskSlice/taskSlice';
import { ITask } from '../../models/ITask';
import { IBoard } from '../../models/IBoard';

const { TYPE, GET } = requests;

export const getAllUserTasks = async (boards: IBoard[]): Promise<ITask[]> => {
  const result = [];
  const { dispatch } = store;

  for (const board of boards) {
    const response = await fetch(`${path.tasks}/${board._id}`, {
      method: GET as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: TYPE as string,
      },
    });

    const tasks: ITask[] = await response.json();
    result.push(tasks);
  }
  const newResult = result.flat();
  dispatch(setAllUserTasks(newResult));
  return newResult;
};
