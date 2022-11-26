import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';

const { DELETE } = requests;
const { INVALID_TOKEN } = Errors;

export const deleteBoard = async (boardId: string): Promise<void> => {
  try {
    const response = await fetch(`${path.boards}/${boardId}`, {
      method: DELETE as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
      },
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
  } catch (err) {
    throw err;
  }
};
