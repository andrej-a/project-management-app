import { IBoard } from '../../models/IBoard';
import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { ICreateBoardData } from '../../models/IInputData';

const { TYPE, PUT } = requests;
const { INVALID_TOKEN } = Errors;

export const updateBoard = async (board: ICreateBoardData): Promise<IBoard> => {
  try {
    const response = await fetch(path.boards, {
      method: PUT as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: TYPE as string,
      },
      body: JSON.stringify(board),
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
