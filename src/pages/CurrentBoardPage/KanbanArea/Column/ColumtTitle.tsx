import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppSelector } from '../../../../hooks/hooks';
import crossIcon from '../../../../assets/img/cross.svg';
import confirmIcon from '../../../../assets/img/confirm.svg';
import { InputError } from '../../../../components/ModalsManager/Modals/Registration/Form/form.styled';
import { IColumnTitle } from '../../../../models/IInputData';
import { TitleWrapper } from './ColumnTitle.styled';
import SvgButton from '../../../../components/SvgButton/SvgButton';
const ColumnTitle = ({ title }: { title: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { hint, buttonColor } = useAppSelector((state) => {
    return {
      hint: state.language.lang.createCard.hint,
      buttonColor: state.application_theme.theme.TASK_TEXT,
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: title,
    },
  });

  const formSubmit: SubmitHandler<IColumnTitle> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    inputRef.current?.blur();
  };
  const formReset = () => {
    // eslint-disable-next-line no-console
    if (inputRef.current) {
      inputRef.current.value = title;
      inputRef.current.blur();
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(formSubmit)}>
      <TitleWrapper>
        <input
          {...register('title', { required: true, min: 3 })}
          placeholder={hint}
          type="text"
          name="title"
          id="title"
          autoComplete="off"
          ref={inputRef} //ВОТ ЭТА СТРОКА
        />
        <InputError style={{ position: 'absolute', top: '30px' }}>
          {errors.title?.message}
        </InputError>
        <div className="buttons">
          <SvgButton color={buttonColor} icon={crossIcon} size={20} handleClick={formReset} />
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
