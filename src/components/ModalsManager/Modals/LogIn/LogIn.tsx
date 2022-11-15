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
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
export const LogIn = () => {
  const { title, changeModalToSignIn, cancel } = useAppSelector((state) => {
    return {
      title: state.language.loginModal.title,
      changeModalToSignIn: state.language.loginModal.changeModalToSignUp,
      cancel: state.language.cancel,
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
              <ChangeModal>{changeModalToSignIn}</ChangeModal>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Cancel>{cancel.toUpperCase()}</Cancel>
            </CancelWrapper>
          </LogInCard>
        </LogInFrame>
      </LogInWrapper>
    </>
  );
};
