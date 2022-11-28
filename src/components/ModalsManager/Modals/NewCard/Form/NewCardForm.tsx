import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
/* MODELS */
import { ICreateCardData } from '../../../../../models/IInputData';
/**DISPATCH */
import {
  setCurrentTask,
  setNewTaskColumnId,
  updateTaskInfo,
} from '../../../../../slices/taskSlice/taskSlice';
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
import { fetchNewTasks, fetchTask } from '../../../../../slices/taskSlice/actions';
import { priorityKey } from '../../../../../constants/priorityKey';
import { SelectAssign } from './SelectAssign';

export const NewCardForm = () => {
  const dispatch = useAppDispatch();
  const {
    hint,
    description,
    priority,
    addTaskButon,
    titlePriority,
    cancel,
    task,
    users,
    assign,
    userId,
  } = useAppSelector((state) => {
    return {
      hint: state.language.lang.createCard.hint,
      description: state.language.lang.createCard.description,
      priority: state.language.lang.createCard.priority,
      assign: state.language.lang.createCard.assign,
      addTaskButon: state.task.currentTask
        ? state.language.lang.updateCard.addTaskButon
        : state.language.lang.createCard.addTaskButon,
      titlePriority: state.language.lang.createCard.titlePriority,
      cancel: state.language.lang.cancel,
      task: state.task.currentTask,
      users: state.user.users,
      userId: state.user.id,
    };
  });
  const [assignArray, setAssignArray] = useState<string[]>(task ? task.users : []);
  const handleSetAssignArray = (value: string[]) => {
    setAssignArray(() => value);
  };
  const schema = yup
    .object({
      title: yup.string().required().min(3),
      description: yup.string().required().min(3),
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
      ? {
          title: task.title.split(priorityKey)[0],
          description: task.description,
          priority: task.title.split(priorityKey)[1] ?? priority.high,
        }
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
          _id: task._id ?? '',
          title: data.title + priorityKey + data.priority,
          description: data.description,
          users: assignArray,
        })
      );
      dispatch(fetchTask({ ...data, assign: assignArray }));
    } else {
      dispatch(fetchNewTasks({ task: { ...data, assign: assignArray } }));
      dispatch(setNewTaskColumnId(undefined));
    }
  };

  return (
    <>
      <FormWrapper>
        <form action="" onSubmit={handleSubmit(formSubmit)}>
          <InputWrapper>
            <TitleInput {...register('title')} placeholder={hint} name="title" id="title" />
            <InputError>{errors.title?.message}</InputError>
          </InputWrapper>
          <InputWrapper>
            <DescriptionInput
              {...register('description')}
              placeholder={description}
              name="description"
              id="description"
            />
            <InputError>{errors.description?.message}</InputError>
          </InputWrapper>
          <PriorityTitle>{assign}</PriorityTitle>
          <SelectAssign task={task!} users={users!} handleSetAssignArray={handleSetAssignArray} />
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
            </InputWrapper>
          </LabelWrapper>
          <InputError>{errors.priority?.message}</InputError>
          <ButtonsWrapper>
            <CreateCardCancelButton
              onClick={() => {
                dispatch(setStatus('hidden'));
                dispatch(setCurrentTask(undefined));
              }}
            >
              {cancel}
            </CreateCardCancelButton>
            <input disabled={Object.keys(errors).length > 0} type="submit" value={addTaskButon} />
          </ButtonsWrapper>
        </form>
      </FormWrapper>
    </>
  );
};
