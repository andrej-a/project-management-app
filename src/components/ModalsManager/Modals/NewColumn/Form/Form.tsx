import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* STYLES */
import { CreateColumnWrapper } from './Form.styled';
import { ButtonsWrapper } from '../../DeleteItem/DeleteItem.styled';
import { CreateCardCancelButton } from '../../New_Board/Form/Form.styled';
import { InputError } from '../../Registration/Form/form.styled';
import { InputWrapper } from './Form.styled';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
/* CONSTANTS */
import { ICreateColumn } from '../../../../../models/IInputData';

export const NewColumnForm = () => {
  const dispatch = useAppDispatch();
  const { hint, addColumnButton, cancel } = useAppSelector((state) => {
    return {
      hint: state.language.createColumn.hint,
      addColumnButton: state.language.createColumn.addColumnButton,
      cancel: state.language.cancel,
    };
  });
  const schema = yup
    .object({
      title: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ICreateColumn>({
    resolver: yupResolver(schema),
    defaultValues: { title: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateColumn> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <CreateColumnWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <input {...register('title')} placeholder={hint} type="text" name="title" id="title" />
            <InputError>{errors.title?.message}</InputError>
          </InputWrapper>
          <ButtonsWrapper>
            <CreateCardCancelButton>{cancel}</CreateCardCancelButton>
            <input
              disabled={Object.keys(errors).length > 0}
              type="submit"
              value={addColumnButton}
            />
          </ButtonsWrapper>
        </form>
      </CreateColumnWrapper>
    </>
  );
};
