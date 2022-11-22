import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
/* MODELS */
import { IRegistrationData } from '../../../../../models/IInputData';
/* STYLES */
import { FormWrapper, InputWrapper, InputError } from './form.styled';
/* THUNKS */
import { registrationUser } from '../../../../../slices/userSlice/userSlice';

export const Form = () => {
  const dispatch = useAppDispatch();
  const { namePlaceholder, loginPlaceholder, passwordPlaceholder, registrationButton } =
    useAppSelector((state) => {
      return {
        namePlaceholder: state.language.lang.registrationModal.namePlaceholder,
        loginPlaceholder: state.language.lang.registrationModal.loginPlaceholder,
        passwordPlaceholder: state.language.lang.registrationModal.passwordPlaceholder,
        registrationButton: state.language.lang.registrationModal.registrationButton,
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
              id=""
            />
            <InputError>{errors.name?.message}</InputError>
          </InputWrapper>
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
