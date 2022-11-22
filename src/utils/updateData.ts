import { ILogInData } from '../models/IInputData';
import { getAllUsers } from '../service/getAllUsers';
import { setValueToLocalStorage } from './setValueToLocalStorage';
import { updateCurrentState, authorizationSwitch } from '../slices/userSlice/userSlice';
import { setStatus } from '../slices/modalsSlice/modalsSlice';
import { setWarningMessage } from '../slices/modalsSlice/modalsSlice';
import { store } from '../store/store';

export const updateStateAndLocalData = async (data: ILogInData) => {
  const { dispatch } = store;
  let users = await getAllUsers();
  users = users.filter((item) => item.login === data.login);

  if (users.length) {
    setValueToLocalStorage('TASKBAN_USER_ID', users[0]._id);
    setValueToLocalStorage('TASKBAN_USER_NAME', users[0].name);
    setValueToLocalStorage('TASKBAN_USER_LOGIN', users[0].login);

    dispatch(updateCurrentState(users[0]));
    dispatch(authorizationSwitch());
    dispatch(setStatus('hidden'));
  } else {
    dispatch(setWarningMessage(`Some errorrrr`));
    setTimeout(() => {
      dispatch(setWarningMessage(''));
    }, 5000);
  }
};
