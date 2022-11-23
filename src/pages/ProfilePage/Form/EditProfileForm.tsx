import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ClockLoader } from 'react-spinners';

/* STYLES */
import { Wrapper, Title, DeleteAccountButton } from './EditProfileForm.styled';
import { IRegistrationData } from '../../../models/IInputData';
import {
  InputError,
  InputWrapper,
} from '../../../components/ModalsManager/Modals/Registration/Form/form.styled';
export const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  const {
    title,
    userName,
    namePlaceholder,
    loginPlaceholder,
    passwordPlaceholder,
    changeButton,
    deleteAccount,
  } = useAppSelector((state) => {
    return {
      title: state.language.lang.editProfile.title,
      userName: state.user.name,
      namePlaceholder: state.language.lang.editProfile.namePlaceholder,
      loginPlaceholder: state.language.lang.editProfile.loginPlaceholder,
      passwordPlaceholder: state.language.lang.editProfile.passwordPlaceholder,
      changeButton: state.language.lang.editProfile.changeButton,
      deleteAccount: state.language.lang.deleteAccount,
    };
  });
  const schema = yup
    .object({
      name: yup.string().required().min(3),
      login: yup.string().required().min(3),
      password: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IRegistrationData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', login: '', password: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<IRegistrationData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

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
              type="text"
              name="password"
              id="password"
            />
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          <input disabled={Object.keys(errors).length > 0} type="submit" value={changeButton} />
        </form>
        <DeleteAccountButton>{deleteAccount.toUpperCase()}</DeleteAccountButton>
      </Wrapper>
    </>
  );
};
