/* UTILS */
import { getCookie } from '../utils/cookie/getCookie';
/* MODELS */
import { TAllRegistredUser } from '../models/IInputData';

export const getAllUsers = async (): Promise<TAllRegistredUser> => {
  const responce = await fetch('https://kanban-lizaveta01.koyeb.app/users', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
    },
  });

  const result: TAllRegistredUser = await responce.json();
  return result;
};
