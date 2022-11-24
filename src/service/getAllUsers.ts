/* MODELS */
import { TAllRegistredUser } from '../models/IInputData';
import { path, requests } from '../models/requests';
import { getCookie } from '../utils/cookie/getCookie';

export const getAllUsers = async (): Promise<TAllRegistredUser> => {
  const { TYPE, GET } = requests;
  const request = await fetch(`${path.users}`, {
    method: `${GET}`,
    headers: {
      accept: `${TYPE}`,
      Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
    },
  });

  const responce: TAllRegistredUser = await request.json();
  return responce;
};
