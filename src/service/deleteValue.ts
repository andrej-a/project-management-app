/* MODELS */
import { requests } from '../models/requests';
/* UTILS */
import { getCookie } from '../utils/cookie/getCookie';
import { showWarningMessage } from '../utils/showWarningMessage';
/* STORE */
import { store } from '../store/store';
import { setStatus, setLoadingState } from '../slices/modalsSlice/modalsSlice';
import { authorizationSwitch } from '../slices/userSlice/userSlice';

export const deleteValue = async (url: string, removingValue: string) => {
  const { DELETE, TYPE, SUCCESSFULL_REQUEST, WARNING_MESSAGE_DURATION } = requests;
  const { dispatch } = store;
  dispatch(setLoadingState('loading'));
  const request = await fetch(url, {
    method: `${DELETE}`,
    headers: {
      accept: `${TYPE}`,
      Authorization: `Bearer ${getCookie('TASKBAN_USER_TOKEN')}`,
    },
  });

  const responce = await request.json();

  if (request.status !== SUCCESSFULL_REQUEST) {
    showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
    dispatch(setLoadingState('loaded'));
  } else {
    showWarningMessage(`Successfully deleted: ${removingValue}`);
    dispatch(authorizationSwitch());
    setTimeout(() => {
      dispatch(setStatus('hidden'));
      dispatch(setLoadingState('loaded'));
    }, WARNING_MESSAGE_DURATION);
  }
};
