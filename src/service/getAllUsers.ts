/* MODELS */
import { TAllRegistredUser } from '../models/IInputData';
import { requests } from '../models/requests';
import { getCookie } from '../utils/cookie/getCookie';

export const getAllUsers = async (): Promise<TAllRegistredUser> => {
  const { TYPE, GET, MAIN_ROUTE, GET_ALL_USERS } = requests;
  const request = await fetch(`${MAIN_ROUTE}${GET_ALL_USERS}`, {
    method: `${GET}`,
    headers: {
      accept: `${TYPE}`,
      Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
    },
  });

  const responce: TAllRegistredUser = await request.json();
  return responce;
};
