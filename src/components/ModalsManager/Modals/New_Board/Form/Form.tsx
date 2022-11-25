import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setStatus } from '../../../../../slices/modalsSlice/modalsSlice';
/* HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
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
import { setCurrentBoard, updateBoardTitle } from '../../../../../slices/boardSlice/boardSlice';
import { fetchNewBoard } from '../../../../../slices/boardSlice/actions';

export const CreateBoardForm = () => {
  const dispatch = useAppDispatch();
  const { hint, description, createBoard, cancel, currentBoard, modalsState } = useAppSelector(
    (state) => {
      return {
        modalsState: state.modals_state.modalsState,
        hint: state.language.lang.createBoard.hint,
        description: state.language.lang.createBoard.description,
        createBoard: state.board.currentBoard
          ? state.language.lang.updateBoard.createButton
          : state.language.lang.createBoard.createButton,
        cancel: state.language.lang.cancel,
        currentBoard: state.board.currentBoard,
      };
    }
  );
  const schema = yup
    .object({
      title: yup.string().required().min(3),
      // descriptionInput: yup.string().required().min(3),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ICreateBoardData>({
    resolver: yupResolver(schema),
    defaultValues: { title: '' },
    // descriptionInput: ''
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      dispatch(setStatus('hidden'));
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateBoardData> = (data) => {
    if (currentBoard && modalsState === 'update_board') {
      dispatch(updateBoardTitle({ title: data.title, id: currentBoard._id }));
    } else {
      // eslint-disable-next-line no-console
      console.log(data);
      dispatch(fetchNewBoard(data));
    }
  };

  return (
    <>
      <CreateBoardFormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <TitleInput {...register('title')} placeholder={hint} name="title" id="title" />
            <InputError>{errors.title?.message}</InputError>
          </InputWrapper>
          {/* <InputWrapper>
            <DescriptionInput
              {...register('descriptionInput')}
              placeholder={description}
              wrap="soft"
              name="descriptionInput"
              id="descriptionInput"
            />
            <InputError>{errors.descriptionInput?.message}</InputError>
          </InputWrapper> */}
          <ButtonsWrapper>
            <CreateCardCancelButton
              onClick={() => {
                dispatch(setStatus('hidden'));
              }}
            >
              {cancel}
            </CreateCardCancelButton>
            <input disabled={Object.keys(errors).length > 0} type="submit" value={createBoard} />
          </ButtonsWrapper>
        </form>
      </CreateBoardFormWrapper>
    </>
  );
};
