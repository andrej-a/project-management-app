import { ClockLoader } from 'react-spinners';
/* STYLES */
import {
  DeleteItemWrapper,
  DeleteItemFrame,
  DeleteItemCard,
  Title,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from './DeleteItem.styled';
import { WarningMessage } from '../Registration/Registration.styled';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/* ACTIONS */
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';
/* SERVICES */
import { deleteValue } from '../../../../service/deleteValue';
/* MODELS */
import { requests } from '../../../../models/requests';
import { deleteCookie } from '../../../../utils/cookie/deleteCookie';
import { getCookie } from '../../../../utils/cookie/getCookie';

export const DeleteItem = () => {
  const dispatch = useAppDispatch();
  const { MAIN_ROUTE, UPDATE_USER } = requests;
  const {
    title,
    confirmButton,
    cancel,
    deletingValue,
    userID,
    warningMessage,
    loadingState,
    loaderColor,
  } = useAppSelector((state) => {
    return {
      title: state.language.lang.deleteItemModal.title,
      confirmButton: state.language.lang.deleteItemModal.confirmButton,
      cancel: state.language.lang.cancel,
      deletingValue: state.modals_state.deletingValue,
      userID: state.user.id,
      warningMessage: state.modals_state.warningMessage,
      loadingState: state.modals_state.loadingState,
      loaderColor: state.application_theme.theme.MAIN_BACKGROUND,
    };
  });
  return (
    <>
      <DeleteItemWrapper>
        <DeleteItemFrame>
          <DeleteItemCard>
            <Title>
              {title} {deletingValue}?
            </Title>
            {loadingState === 'loaded' ? (
              <ButtonsWrapper>
                <CancelButton
                  onClick={() => {
                    dispatch(setStatus('hidden'));
                  }}
                >
                  {cancel}
                </CancelButton>
                <ConfirmButton
                  onClick={() => {
                    deleteValue(`${MAIN_ROUTE}${UPDATE_USER}/${userID}`, deletingValue);
                    deleteCookie(getCookie('TASKBAN_USER_TOKEN') as string);
                  }}
                >
                  {confirmButton}
                </ConfirmButton>
              </ButtonsWrapper>
            ) : (
              <ClockLoader color={loaderColor} />
            )}
            <WarningMessage>{warningMessage}</WarningMessage>
          </DeleteItemCard>
        </DeleteItemFrame>
      </DeleteItemWrapper>
    </>
  );
};
