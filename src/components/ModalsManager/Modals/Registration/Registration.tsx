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
import { Link } from 'react-router-dom';

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
              <Link to="/signIn">
                <ChangeModal>{changeModalToSignIn}</ChangeModal>
              </Link>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Link to="/">
                <Cancel>{cancel.toUpperCase()}</Cancel>
              </Link>
            </CancelWrapper>
            <WarningMessage>{warningMessage}</WarningMessage>
          </RegistrationCard>
        </RegistrationFrame>
      </RegistrationWrapper>
    </>
  );
};
