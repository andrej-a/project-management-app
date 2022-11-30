/* STYLES */
import {
  RegistrationWrapper,
  RegistrationFrame,
  RegistrationCard,
  RegistrationTitleWrapper,
  RegistrationTitle,
  ChangeModalWrapper,
  ChangeModal,
  CancelWrapper,
  Cancel,
  WarningMessage,
} from './Registration.styled';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
/* ACTIONS */
import { setLoadingState, setStatus } from '../../../../slices/modalsSlice/modalsSlice';

export const Registration = () => {
  const dispatch = useAppDispatch();

  const { title, changeModalToSignIn, cancel, warningMessage } = useAppSelector((state) => {
    return {
      title: state.language.lang.registrationModal.title,
      changeModalToSignIn: state.language.lang.registrationModal.changeModalToSignIn,
      cancel: state.language.lang.cancel,
      warningMessage: state.modals_state.warningMessage,
    };
  });
  return (
    <>
      <RegistrationWrapper>
        <RegistrationFrame>
          <RegistrationCard>
            <RegistrationTitleWrapper>
              <RegistrationTitle>{title}</RegistrationTitle>
            </RegistrationTitleWrapper>
            <Form />
            <ChangeModalWrapper>
              <ChangeModal onClick={() => dispatch(setStatus('login'))}>
                {changeModalToSignIn}
              </ChangeModal>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Cancel
                onClick={() => {
                  dispatch(setStatus('hidden'));
                  dispatch(setLoadingState('loaded'));
                }}
              >
                {cancel.toUpperCase()}
              </Cancel>
            </CancelWrapper>
            <WarningMessage>{warningMessage}</WarningMessage>
          </RegistrationCard>
        </RegistrationFrame>
      </RegistrationWrapper>
    </>
  );
};
