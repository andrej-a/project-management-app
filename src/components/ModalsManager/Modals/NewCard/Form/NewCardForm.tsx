import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
import { setStatus } from '../../../../../slices/modalsSlice/modalsSlice';
/* STYLES */
import {
  FormWrapper,
  LabelWrapper,
  HighPriorityLabel,
  MediumPriorityLabel,
  LowPriorityLabel,
  PriorityTitle,
} from './NewCardForm.styled';
/* COMPONENTS */
import { InputWrapper, InputError } from '../../Registration/Form/form.styled';
import { ButtonsWrapper } from '../../New_Board/Form/Form.styled';
import {
  TitleInput,
  DescriptionInput,
  CreateCardCancelButton,
} from '../../New_Board/Form/Form.styled';
/* MODELS */
import { ICreateCardData } from '../../../../../models/IInputData';
export const NewCardForm = () => {
  const dispatch = useAppDispatch();
  const { hint, description, priority, addTaskButon, titlePriority, cancel } = useAppSelector(
    (state) => {
      return {
        hint: state.language.lang.createCard.hint,
        description: state.language.lang.createCard.description,
        priority: state.language.lang.createCard.priority,
        addTaskButon: state.language.lang.createCard.addTaskButon,
        titlePriority: state.language.lang.createCard.titlePriority,
        cancel: state.language.lang.cancel,
      };
    }
  );
  const schema = yup
    .object({
      title: yup.string().required().min(3),
      priority: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ICreateCardData>({
    resolver: yupResolver(schema),
    defaultValues: { title: '', description: '', priority: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateCardData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <FormWrapper>
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
              {...register('description')}
              placeholder={description}
              type="text"
              name="description"
              id="description"
            />
          </InputWrapper>

          <PriorityTitle>{titlePriority}</PriorityTitle>
          <LabelWrapper>
            <InputWrapper>
              <input
                {...register('priority')}
                type="radio"
                id="high_priority"
                name="priority"
                value={priority.high}
              />
              <HighPriorityLabel htmlFor="high_priority">
                {priority.high.toUpperCase()}
              </HighPriorityLabel>
            </InputWrapper>
            <InputWrapper>
              <input
                {...register('priority')}
                type="radio"
                id="medium_priority"
                name="priority"
                value={priority.medium}
              />
              <MediumPriorityLabel htmlFor="medium_priority">
                {priority.medium.toUpperCase()}
              </MediumPriorityLabel>
            </InputWrapper>
            <InputWrapper>
              <input
                {...register('priority')}
                type="radio"
                id="low_priority"
                name="priority"
                value={priority.low}
              />
              <LowPriorityLabel htmlFor="low_priority">
                {priority.low.toUpperCase()}
              </LowPriorityLabel>
              <InputError>{errors.priority?.message}</InputError>
            </InputWrapper>
          </LabelWrapper>
          <ButtonsWrapper>
            <CreateCardCancelButton onClick={() => dispatch(setStatus('hidden'))}>
              {cancel}
            </CreateCardCancelButton>
            <input disabled={Object.keys(errors).length > 0} type="submit" value={addTaskButon} />
          </ButtonsWrapper>
        </form>
      </FormWrapper>
    </>
  );
};
