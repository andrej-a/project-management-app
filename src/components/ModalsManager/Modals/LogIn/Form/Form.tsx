import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
/* MODELS */
import { ILogInData } from '../../../../../models/IInputData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError } from './form.styled';
/* THUNKS */
import { loginUserThunk } from '../../../../../slices/userSlice/userSlice';
export const Form = () => {
  const dispatch = useAppDispatch();
  const { loginPlaceholder, passwordPlaceholder, registrationButton } = useAppSelector((state) => {
    return {
      loginPlaceholder: state.language.lang.loginModal.loginPlaceholder,
      passwordPlaceholder: state.language.lang.loginModal.passwordPlaceholder,
      registrationButton: state.language.lang.loginModal.logInButton,
    };
  });

  const schema = yup
    .object({
      login: yup.string().required().min(3),
      password: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ILogInData>({
    resolver: yupResolver(schema),
    defaultValues: { login: '', password: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ILogInData> = (data) => {
    dispatch(loginUserThunk(data));
  };

  return (
    <>
      <FormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input
              {...register('login')}
              placeholder={loginPlaceholder}
              type="text"
              name="login"
              id=""
            />
            <InputError>{errors.login?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <input
              {...register('password')}
              placeholder={passwordPlaceholder}
              type="text"
              name="password"
              id=""
            />
            <InputError>{errors.password?.message}</InputError>
          </InputWrapper>

          <input
            disabled={Object.keys(errors).length > 0}
            type="submit"
            value={registrationButton}
          />
        </form>
      </FormWrapper>
    </>
  );
};
