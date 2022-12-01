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
import { setEditBoard, updateBoardTitle } from '../../../../../slices/boardSlice/boardSlice';
import { fetchNewBoard, fetchUpdateBoard } from '../../../../../slices/boardSlice/actions';

export const CreateBoardForm = () => {
  const dispatch = useAppDispatch();
  const { hint, description, createBoard, cancel, editBoard, modalsState } = useAppSelector(
    (state) => {
      return {
        modalsState: state.modals_state.modalsState,
        hint: state.language.lang.createBoard.hint,
        description: state.language.lang.createBoard.description,
        createBoard: state.board.editBoard
          ? state.language.lang.updateBoard.createButton
          : state.language.lang.createBoard.createButton,
        cancel: state.language.lang.cancel,
        editBoard: state.board.editBoard,
      };
    }
  );
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
  } = useForm<ICreateBoardData>({
    resolver: yupResolver(schema),
    defaultValues: { title: editBoard && modalsState === 'update_board' ? editBoard.title : '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      dispatch(setStatus('hidden'));
      dispatch(setEditBoard(undefined));
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateBoardData> = (data) => {
    if (editBoard && modalsState === 'update_board') {
      dispatch(updateBoardTitle({ title: data.title, id: editBoard._id }));
      dispatch(fetchUpdateBoard({ ...editBoard, title: data.title }));
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
                dispatch(setEditBoard(undefined));
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
