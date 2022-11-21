import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
/**STYLES */
import { InputError } from '../../../../components/ModalsManager/Modals/Registration/Form/form.styled';
import { TitleWrapper } from './ColumnTitle.styled';
import confirmIcon from '../../../../assets/img/confirm.svg';
import crossIcon from '../../../../assets/img/cross.svg';
/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
/**MODELS */
import { IColumnTitle } from '../../../../models/IInputData';
/**DISPATCH */
import { updateColumnTitle } from '../../../../slices/boardSlice/boardSlice';

type Inputs = {
  title: string;
};

const ColumnTitle = ({ id }: { title: string; id: string }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { hint, buttonColor, column } = useAppSelector((state) => {
    return {
      hint: state.language.lang.createCard.hint,
      buttonColor: state.application_theme.theme.TASK_TEXT,
      column: state.board.columns.find((column) => column._id === id),
    };
  });
  const schema = yup
    .object()
    .shape({
      title: yup.string().trim().required().min(3),
    })
    .required();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { ref, ...rest } = register('title');

  const formSubmit = (data: IColumnTitle) => {
    dispatch(updateColumnTitle({ id: id, title: data.title.trim() }));
    inputRef.current?.blur();
  };

  const formReset = () => {
    inputRef.current?.blur();
    reset({ title: column?.title ?? '' });
  };
  const formatInput = () => {
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit(formSubmit)}>
      <TitleWrapper>
        <input
          {...rest}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
          placeholder={hint}
          type="text"
          name="title"
          id="title"
          autoComplete="off"
          defaultValue={column?.title ?? ''}
          onBlur={formatInput}
        />
        <InputError style={{ position: 'absolute', top: '30px' }}>
          {errors.title?.message}
        </InputError>
        <div className="buttons">
          <SvgButton
            color={buttonColor}
            icon={crossIcon}
            size={20}
            handleClick={handleSubmit(formReset)}
          />
          <SvgButton
            color={buttonColor}
            icon={confirmIcon}
            type="submit"
            disabled={Object.keys(errors).length > 0}
            size={20}
          />
        </div>
      </TitleWrapper>
    </form>
  );
};

export default ColumnTitle;
