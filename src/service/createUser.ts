/* MODELS */
import { IRegistrationData, IRegistredUser } from '../models/IInputData';
/* UTILS */
import { setValueToLocalStorage } from '../utils/setValueToLocalStorage';
/* STORE */
import { store } from '../store/store';
import { setWarningMessage } from '../slices/modalsSlice/modalsSlice';

export const createUser = async (data: IRegistrationData): Promise<IRegistredUser> => {
  const responce = await fetch('https://kanban-lizaveta01.koyeb.app/auth/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const content: IRegistredUser = await responce.json();

  if (responce.status !== 200) {
    const { dispatch } = store;
    dispatch(setWarningMessage(content.message));
    setTimeout(() => {
      dispatch(setWarningMessage(''));
    }, 5000);
  } else {
    setValueToLocalStorage('TASKBAN_USER_ID', content._id);
    setValueToLocalStorage('TASKBAN_USER_NAME', content.name);
    setValueToLocalStorage('TASKBAN_USER_LOGIN', content.login);
  }

  return content;
};
