/* MODELS */
import { ILogInData } from '../models/IInputData';
import { requests } from '../models/requests';
/* SERVICES */
import { getAllUsers } from '../service/getAllUsers';
/* UTILS */
import { setValueToLocalStorage } from './setValueToLocalStorage';
import { showWarningMessage } from './showWarningMessage';
/* STORE */
import { store } from '../store/store';
import { updateCurrentState, authorizationSwitch } from '../slices/userSlice/userSlice';
import { setStatus } from '../slices/modalsSlice/modalsSlice';

export const updateStateAndLocalData = async (data: ILogInData) => {
  const { dispatch } = store;
  const { DEFAULT__WARNING_MESSAGE } = requests;
  let users = await getAllUsers();
  users = users.filter((item) => item.login === data.login);

  if (users.length) {
    const currentUser = users[0];
    setValueToLocalStorage(
      ['TASKBAN_USER_ID', 'TASKBAN_USER_NAME', 'TASKBAN_USER_LOGIN'],
      [currentUser._id, currentUser.name, currentUser.login]
    );

    dispatch(updateCurrentState(currentUser));
    dispatch(authorizationSwitch());
    dispatch(setStatus('hidden'));
  } else {
    showWarningMessage(DEFAULT__WARNING_MESSAGE);
  }
};
