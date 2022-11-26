import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* ACTIONlang. */
import { setStatus } from '../../../../../slices/modalsSlice/modalsSlice';
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
import { fetchNewColumn } from '../../../../../slices/columnSlice/actions';

export const NewColumnForm = () => {
  const dispatch = useAppDispatch();
  const { hint, addColumnButton, cancel } = useAppSelector((state) => {
    return {
      hint: state.language.lang.createColumn.hint,
      addColumnButton: state.language.lang.createColumn.addColumnButton,
      cancel: state.language.lang.cancel,
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
    dispatch(fetchNewColumn(data));
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
            <CreateCardCancelButton onClick={() => dispatch(setStatus('hidden'))}>
              {cancel}
            </CreateCardCancelButton>
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
