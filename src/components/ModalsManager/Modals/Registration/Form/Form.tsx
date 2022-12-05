import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { HandySvg } from 'handy-svg';

import EyeOpen from '../../../../../assets/img/eye-toggler.svg';
import EyeClosed from '../../../../../assets/img/eye-closed.svg';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
/* MODELS */
import { IRegistrationData } from '../../../../../models/IInputData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError, TogglerWrapper } from './form.styled';
/* THUNKS */
import { registrationUser } from '../../../../../slices/userSlice/userSlice';
import { setInputType } from '../../../../../slices/modalsSlice/modalsSlice';

import { Spinner } from '../../../../Spinner/Spinner';

export const Form = () => {
  const dispatch = useAppDispatch();
  const {
    namePlaceholder,
    loginPlaceholder,
    passwordPlaceholder,
    registrationButton,
    loadingState,
    inputType,
  } = useAppSelector((state) => {
    return {
      namePlaceholder: state.language.lang.registrationModal.namePlaceholder,
      loginPlaceholder: state.language.lang.registrationModal.loginPlaceholder,
      passwordPlaceholder: state.language.lang.registrationModal.passwordPlaceholder,
      registrationButton: state.language.lang.registrationModal.registrationButton,
      loadingState: state.modals_state.loadingState,
      inputType: state.modals_state.inputType,
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
    return () => {
      dispatch(setInputType('password'));
    };
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<IRegistrationData> = (data) => {
    dispatch(registrationUser(data));
  };

  return (
    <>
      <FormWrapper>
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

          {loadingState === 'loaded' ? (
            <input
              disabled={Object.keys(errors).length > 0}
              type="submit"
              value={registrationButton}
            />
          ) : (
            <Spinner center={false} />
          )}
        </form>
      </FormWrapper>
    </>
  );
};
