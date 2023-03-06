import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* STYLES */
import { Wrapper, Title, DeleteAccountButton } from './EditProfileForm.styled';
import { IRegistrationData } from '../../../models/IInputData';
import { path } from '../../../models/requests';
import {
  InputError,
  InputWrapper,
  TogglerWrapper,
} from '../../../components/ModalsManager/Modals/Registration/Form/form.styled';
import { WarningMessage } from '../../../components/ModalsManager/Modals/Registration/Registration.styled';
import { editUserThunk } from '../../../slices/userSlice/userSlice';
import {
  setDeletingValue,
  setStatus,
  setRequestUrl,
  setInputType,
} from '../../../slices/modalsSlice/modalsSlice';
import { Spinner } from '../../../components/Spinner/Spinner';
import { HandySvg } from 'handy-svg';
import EyeOpen from '../../../assets/img/eye-closed.svg';
import EyeClosed from '../../../assets/img/eye-closed.svg';

export const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const {
    userID,
    warningMessage,
    loadingState,
    title,
    userName,
    namePlaceholder,
    loginPlaceholder,
    passwordPlaceholder,
    changeButton,
    deleteAccount,
    useLogin,
    inputType,
  } = useAppSelector((state) => {
    return {
      userID: state.user.id as string,
      warningMessage: state.modals_state.warningMessage,
      loadingState: state.modals_state.loadingState,
      title: state.language.lang.editProfile.title,
      userName: state.user.name,
      namePlaceholder: state.language.lang.editProfile.namePlaceholder,
      loginPlaceholder: state.language.lang.editProfile.loginPlaceholder,
      passwordPlaceholder: state.language.lang.editProfile.passwordPlaceholder,
      changeButton: state.language.lang.editProfile.changeButton,
      deleteAccount: state.language.lang.deleteAccount,
      useLogin: state.user.login,
      inputType: state.modals_state.inputType,
    };
  });
  const schema = yup
    .object({
      name: yup.string().required().min(3),
      login: yup.string().required().min(3),
      password: yup.string().required().min(8),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IRegistrationData>({
    resolver: yupResolver(schema),
    defaultValues: { name: `${userName}`, login: `${useLogin}`, password: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<IRegistrationData> = (data) => {
    dispatch(editUserThunk({ userID, data }));
  };

  useEffect(() => {
    return () => {
      dispatch(setInputType('password'));
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Title>
          {title}
          <b>{userName}</b>
        </Title>

        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input
              {...register('name')}
              placeholder={namePlaceholder}
              type="text"
              name="name"
              id="name"
            />
            <InputError>{errors.name?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('login')}
              placeholder={loginPlaceholder}
              type="text"
              name="login"
              id="login"
            />
            <InputError>{errors.login?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('password')}
              placeholder={passwordPlaceholder}
              type={inputType}
              name="password"
              id="password"
            />
            <TogglerWrapper
              onClick={() => dispatch(setInputType(inputType === 'password' ? 'text' : 'password'))}
            >
              <HandySvg
                src={inputType === 'password' ? EyeOpen : EyeClosed}
                width="32"
                height="32"
              />
            </TogglerWrapper>
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          {loadingState === 'loading' ? (
            <Spinner center={false} />
          ) : (
            <input disabled={Object.keys(errors).length > 0} type="submit" value={changeButton} />
          )}
          <WarningMessage>{warningMessage}</WarningMessage>
        </form>
        <DeleteAccountButton
          onClick={() => {
            dispatch(setDeletingValue(userName));
            dispatch(setRequestUrl(`${path.users}/${userID}`));
            dispatch(setStatus('delete_item'));
          }}
        >
          {deleteAccount}
        </DeleteAccountButton>
      </Wrapper>
    </>
  );
};
