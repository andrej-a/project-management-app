import { IBoard } from '../../models/IBoard';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';

const { TYPE, PUT } = requests;
const { INVALID_TOKEN } = Errors;

export const updateBoard = async (board: IBoard): Promise<IBoard> => {
  const newBoard = {
    title: board.title,
    owner: board.owner,
    users: board.users,
  };

  try {
    const response = await fetch(`${path.boards}/${board._id}`, {
      method: PUT as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: TYPE as string,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(newBoard),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    const content: IBoard = await response.json();
    return content;
  } catch (err) {
    throw err;
  }
};
