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
import { deleteCookie } from '../../../../utils/cookie/deleteCookie';
import { getCookie } from '../../../../utils/cookie/getCookie';
import { Spinner } from '../../../Spinner/Spinner';

export const DeleteItem = () => {
  const dispatch = useAppDispatch();
  const { title, confirmButton, cancel, deletingValue, warningMessage, loadingState, requestURL } =
    useAppSelector((state) => {
      return {
        title: state.language.lang.deleteItemModal.title,
        confirmButton: state.language.lang.deleteItemModal.confirmButton,
        cancel: state.language.lang.cancel,
        deletingValue: state.modals_state.deletingValue,
        warningMessage: state.modals_state.warningMessage,
        loadingState: state.modals_state.loadingState,
        requestURL: state.modals_state.requestURL,
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
                  type="button"
                  onClick={() => {
                    dispatch(setStatus('hidden'));
                  }}
                >
                  {cancel}
                </CancelButton>
                <ConfirmButton
                  onClick={() => {
                    deleteValue(requestURL, deletingValue);
                    requestURL.match('users') &&
                      deleteCookie(getCookie('TASKBAN_USER_TOKEN') as string);
                  }}
                >
                  {confirmButton}
                </ConfirmButton>
              </ButtonsWrapper>
            ) : (
              <Spinner center={false} />
            )}
            <WarningMessage>{warningMessage}</WarningMessage>
          </DeleteItemCard>
        </DeleteItemFrame>
      </DeleteItemWrapper>
    </>
  );
};
