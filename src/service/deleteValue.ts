/* MODELS */
import { path, requests } from '../models/requests';
/* UTILS */
import { getCookie } from '../utils/cookie/getCookie';
import { showWarningMessage } from '../utils/showWarningMessage';
/* STORE */
import { store } from '../store/store';
import { setStatus, setLoadingState } from '../slices/modalsSlice/modalsSlice';
import { authorizationSwitch } from '../slices/userSlice/userSlice';
import { fetchAllBoards, fetchUpdateBoardAssignList } from '../slices/boardSlice/actions';
import { fetchAllColumns } from '../slices/columnSlice/actions';
import { fetchAllTasks } from '../slices/taskSlice/actions';
import { deleteValueFromLocalStorage } from '../utils/deleteValueFromLocalStorage';
/* CONSTANTS */
import { localData } from '../constants/applicationConstants';

export const deleteValue = async (url: string, removingValue: string) => {
  const { DELETE, TYPE, SUCCESSFULL_REQUEST, SHORT_WARNING_MESSAGE_DURATION } = requests;
  const { dispatch } = store;
  const currentBoard = store.getState().board.currentBoard?._id;
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
    showWarningMessage(
      `${store.getState().language.lang.successDeleteValueMessage} ${removingValue}`
    );
    setTimeout(() => {
      dispatch(setStatus('hidden'));
      dispatch(setLoadingState('loaded'));

      if (url.match(path.users)) {
        dispatch(authorizationSwitch());
        deleteValueFromLocalStorage(localData);
      }
      url.match(path.boards) && dispatch(fetchAllBoards());
      url.match('columns') && dispatch(fetchAllColumns(currentBoard!));
      url.match('tasks') && dispatch(fetchAllTasks({ boardId: currentBoard! }));

      dispatch(fetchUpdateBoardAssignList());
    }, SHORT_WARNING_MESSAGE_DURATION);
  }
};
