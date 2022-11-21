import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
/* MODELS */
import { ICreateCardData } from '../../../../../models/IInputData';
/**DISPATCH */
import { setCurrentTask, updateTaskInfo } from '../../../../../slices/boardSlice/boardSlice';
import { setStatus } from '../../../../../slices/modalsSlice/modalsSlice';
/* STYLES */
import {
  FormWrapper,
  HighPriorityLabel,
  LabelWrapper,
  LowPriorityLabel,
  MediumPriorityLabel,
  PriorityTitle,
} from './NewCardForm.styled';
import { ButtonsWrapper } from '../../New_Board/Form/Form.styled';
import {
  CreateCardCancelButton,
  DescriptionInput,
  TitleInput,
} from '../../New_Board/Form/Form.styled';
import { InputError, InputWrapper } from '../../Registration/Form/form.styled';

export const NewCardForm = () => {
  const dispatch = useAppDispatch();
  const { hint, description, priority, addTaskButon, titlePriority, cancel, task, currentTask } =
    useAppSelector((state) => {
      return {
        hint: state.language.lang.createCard.hint,
        description: state.language.lang.createCard.description,
        priority: state.language.lang.createCard.priority,
        addTaskButon: state.board.currentTask
          ? state.language.lang.updateCard.addTaskButon
          : state.language.lang.createCard.addTaskButon,
        titlePriority: state.language.lang.createCard.titlePriority,
        cancel: state.language.lang.cancel,
        task: state.board.currentTask,
        currentTask: state.board.currentTask,
      };
    });
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
    defaultValues: task
      ? { title: task.title, description: task.description, priority: priority.high }
      : { title: '', description: '', priority: '' },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      dispatch(setStatus('hidden'));
      dispatch(setCurrentTask(undefined));
    }
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateCardData> = (data) => {
    if (task) {
      dispatch(
        updateTaskInfo({
          _id: currentTask?._id ?? '',
          title: data.title,
          description: data.description,
        })
      );
      // eslint-disable-next-line no-console
      console.log('Update to ', data);
      // eslint-disable-next-line no-console
    } else console.log('Create ', data);
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
