import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ITasksSet } from '../../models/ITasksSet';

const { TYPE, PATCH } = requests;
const { INVALID_TOKEN } = Errors;
export const updateTasksSet = async (tasks: ITasksSet[]) => {
  try {
    const response = await fetch(`${path.tasks}`, {
      method: PATCH as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: `${TYPE}`,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(tasks),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }

    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    // eslint-disable-next-line no-console
  } catch (err) {
    throw err;
  }
};
