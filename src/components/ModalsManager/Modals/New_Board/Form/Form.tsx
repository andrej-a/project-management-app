import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/* HOOKS */
import { useAppSelector } from '../../../../../hooks/hooks';
/* STYLES */
import {
  CreateBoardFormWrapper,
  TitleInput,
  DescriptionInput,
  CreateCardCancelButton,
  ButtonsWrapper,
} from './Form.styled';
/* CONSTANTS */
import { ICreateBoardData } from '../../../../../models/IInputData';
import { InputError, InputWrapper } from '../../Registration/Form/form.styled';
export const CreateBoardForm = () => {
  const { hint, description, createBoard, cancel } = useAppSelector((state) => {
    return {
      hint: state.language.createBoard.hint,
      description: state.language.createBoard.description,
      createBoard: state.language.createBoard.createButton,
      cancel: state.language.cancel,
    };
  });
  const schema = yup
    .object({
      title: yup.string().required().min(3),
      descriptionInput: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ICreateBoardData>({
    resolver: yupResolver(schema),
    defaultValues: { title: '', descriptionInput: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateBoardData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <CreateBoardFormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <TitleInput
              {...register('title')}
              placeholder={hint}
              type="text"
              name="title"
              id="title"
            />
            <InputError>{errors.title?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <DescriptionInput
              {...register('descriptionInput')}
              placeholder={description}
              type="text"
              name="descriptionInput"
              id="descriptionInput"
            />
            <InputError>{errors.descriptionInput?.message}</InputError>
          </InputWrapper>
          <ButtonsWrapper>
            <CreateCardCancelButton>{cancel}</CreateCardCancelButton>
            <input disabled={Object.keys(errors).length > 0} type="submit" value={createBoard} />
          </ButtonsWrapper>
        </form>
      </CreateBoardFormWrapper>
    </>
  );
};
