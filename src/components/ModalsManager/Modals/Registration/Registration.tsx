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
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/* COMPONENTS */
import { Form } from './Form/Form';
/* ACTIONS */
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';

export const Registration = () => {
  const dispatch = useAppDispatch();

  const { title, changeModalToSignIn, cancel } = useAppSelector((state) => {
    return {
      title: state.language.lang.registrationModal.title,
      changeModalToSignIn: state.language.lang.registrationModal.changeModalToSignIn,
      cancel: state.language.lang.cancel,
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
              <Cancel onClick={() => dispatch(setStatus('hidden'))}>{cancel.toUpperCase()}</Cancel>
            </CancelWrapper>
          </RegistrationCard>
        </RegistrationFrame>
      </RegistrationWrapper>
    </>
  );
};
