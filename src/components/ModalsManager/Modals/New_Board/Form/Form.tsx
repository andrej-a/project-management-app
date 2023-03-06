import { useEffect, useState } from 'react';
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
  EmojiWrap,
} from './Form.styled';
/* CONSTANTS */
import { ICreateBoardData } from '../../../../../models/IInputData';
import { InputError, InputWrapper } from '../../Registration/Form/form.styled';
import { setEditBoard, updateBoardTitle } from '../../../../../slices/boardSlice/boardSlice';
import { fetchNewBoard, fetchUpdateBoard } from '../../../../../slices/boardSlice/actions';
import EmojiPicker, { EmojiStyle, Theme } from 'emoji-picker-react';
import { emojiKey } from '../../../../../constants/emojiKey';
import { themeEnum } from '../../../../../constants/localStorage';

export const CreateBoardForm = () => {
  const dispatch = useAppDispatch();
  const { hint, description, createBoard, cancel, editBoard, modalsState, theme } = useAppSelector(
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
        theme: state.application_theme.theme.CURRENT_THEME,
      };
    }
  );
  const [emoji, setEmoji] = useState<string>(
    editBoard && modalsState === 'update_board' ? editBoard.title.split(emojiKey)[1] : ''
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
    defaultValues: {
      title: editBoard && modalsState === 'update_board' ? editBoard.title.split(emojiKey)[0] : '',
    },
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
      dispatch(updateBoardTitle({ title: data.title + emojiKey + emoji, id: editBoard._id }));
      dispatch(fetchUpdateBoard({ ...editBoard, title: data.title + emojiKey + emoji }));
    } else {
      dispatch(fetchNewBoard({ ...data, title: data.title + emojiKey + emoji }));
    }
  };

  return (
    <>
      <CreateBoardFormWrapper>
        <form onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <EmojiWrap
                style={emoji && !!emoji.length ? { display: 'block' } : { display: 'none' }}
                onClick={() => setEmoji(() => '')}
              >
                <div className="emoji">{emoji}</div>
                <span className="one"></span>
                <span className="two"></span>
              </EmojiWrap>
              <TitleInput
                style={emoji && !!emoji.length ? { width: 'calc(100% - 30px)' } : { width: '100%' }}
                type="text"
                {...register('title')}
                placeholder={hint}
                name="title"
                id="title"
              />
            </div>
            <InputError>{errors.title?.message}</InputError>
          </InputWrapper>
          <EmojiPicker
            onEmojiClick={(emoji) => setEmoji(() => emoji.emoji)}
            theme={theme === themeEnum.DARK ? Theme.DARK : Theme.LIGHT}
            width="100%"
            height="350px"
            searchPlaceHolder=""
            emojiStyle={EmojiStyle.NATIVE}
            autoFocusSearch={false}
          />
          <ButtonsWrapper>
            <CreateCardCancelButton
              type="button"
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
