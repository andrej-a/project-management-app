/* MODELS */
import { ILogInData } from '../models/IInputData';
import { IAuthorizedUser } from '../models/IUser';
import { requests } from '../models/requests';
/* STORE */
import { store } from '../store/store';
import { setLoadingState } from '../slices/modalsSlice/modalsSlice';
/* UTILS */
import { setValueToCookie } from '../utils/cookie/setValueToCookie';
import { updateStateAndLocalData } from '../utils/updateData';
import { showWarningMessage } from '../utils/showWarningMessage';

export const loginUser = async (data: ILogInData) => {
  const { dispatch } = store;
  const { SUCCESSFULL_REQUEST, TYPE, POST, MAIN_ROUTE, SIGN_IN } = requests;
  dispatch(setLoadingState('loading'));
  const request = await fetch(`${MAIN_ROUTE}${SIGN_IN}`, {
    method: `${POST}`,
    headers: {
      Accept: `${TYPE}`,
      'Content-Type': `${TYPE}`,
    },
    body: JSON.stringify(data),
  });

  const responce: IAuthorizedUser = await request.json();

  if (request.status !== SUCCESSFULL_REQUEST) {
    showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
  } else {
    setValueToCookie(responce.token);
    updateStateAndLocalData(data);
  }

  dispatch(setLoadingState('loaded'));
};
