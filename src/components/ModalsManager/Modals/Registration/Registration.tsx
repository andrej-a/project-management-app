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
} from './Registration.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
export const Registration = () => {
  const { title, changeModalToSignIn, cancel } = useAppSelector((state) => {
    return {
      title: state.language.registrationModal.title,
      changeModalToSignIn: state.language.registrationModal.changeModalToSignIn,
      cancel: state.language.cancel,
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
              <ChangeModal>{changeModalToSignIn}</ChangeModal>
            </ChangeModalWrapper>
            <CancelWrapper>
              <Cancel>{cancel.toUpperCase()}</Cancel>
            </CancelWrapper>
          </RegistrationCard>
        </RegistrationFrame>
      </RegistrationWrapper>
    </>
  );
};
