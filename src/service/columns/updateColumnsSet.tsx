import { getCookie } from '../../utils/cookie/getCookie';
import { Errors, path, requests } from '../../models/requests';
import { IColumnsSet } from '../../models/IColumnsSet';

const { TYPE, PATCH } = requests;
const { INVALID_TOKEN } = Errors;
export const updateColumnsSet = async (columns: IColumnsSet[]) => {
  try {
    const response = await fetch(`${path.columns}`, {
      method: PATCH as string,
      headers: {
        Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
        Accept: `${TYPE}`,
        'Content-Type': `${TYPE}`,
      },
      body: JSON.stringify(columns),
    });

    if (response.status === INVALID_TOKEN) {
      throw new Error('Access token is missing or invalid');
    }

    if (!response.ok) {
      throw new Error('Something wrong!');
    }
  } catch (err) {
    throw err;
  }
};
