/* STYLES */
import {
  LogInWrapper,
  LogInFrame,
  LogInCard,
  LogInTitleWrapper,
  LogInTitle,
  ChangeModalWrapper,
  ChangeModal,
  CancelWrapper,
  Cancel,
} from './LogIn.styled';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
import { WarningMessage } from '../Registration/Registration.styled';
/* ACTIONS */
import { setLoadingState, setStatus } from '../../../../slices/modalsSlice/modalsSlice';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  const dispatch = useAppDispatch();

  const { title, changeModalToSignIn, cancel, warningMessage } = useAppSelector((state) => {
    return {
      title: state.language.lang.loginModal.title,
      changeModalToSignIn: state.language.lang.loginModal.changeModalToSignUp,
      cancel: state.language.lang.cancel,
      warningMessage: state.modals_state.warningMessage,
    };
  });
  return (
    <>
      <LogInWrapper>
        <LogInFrame>
          <LogInCard>
            <LogInTitleWrapper>
              <LogInTitle>{title}</LogInTitle>
            </LogInTitleWrapper>
            <Form />
            <ChangeModalWrapper>
              <Link to="/signUp">
                <ChangeModal>{changeModalToSignIn}</ChangeModal>
              </Link>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Link to="/">
                <Cancel>{cancel.toUpperCase()}</Cancel>
              </Link>
            </CancelWrapper>
            <WarningMessage>{warningMessage}</WarningMessage>
          </LogInCard>
        </LogInFrame>
      </LogInWrapper>
    </>
  );
};
