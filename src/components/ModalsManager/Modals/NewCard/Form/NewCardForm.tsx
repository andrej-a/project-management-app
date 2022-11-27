import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
/* MODELS */
import { ICreateCardData, IRegistredUser } from '../../../../../models/IInputData';
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
  SelectAssign,
} from './NewCardForm.styled';
import { ButtonsWrapper } from '../../New_Board/Form/Form.styled';
import {
  CreateCardCancelButton,
  DescriptionInput,
  TitleInput,
} from '../../New_Board/Form/Form.styled';
import { InputError, InputWrapper } from '../../Registration/Form/form.styled';
import { SearchSelect } from '../../../../Search/Search.styled';
import { createNewTask } from '../../../../../service/tasks/createTask';
import { fetchTask } from '../../../../../slices/taskSlice/actions';

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
    currentTask,
    users,
    assign,
    newTaskColumnId,
    tasks,
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
      currentTask: state.task.currentTask,
      users: state.user.users,
      newTaskColumnId: state.task.newTaskColumnId,
      tasks: [...state.task.tasks].filter((task) => task.columnId === state.task.newTaskColumnId),
    };
  });
  const schema = yup
    .object({
      title: yup.string().required().min(3),
      description: yup.string().required().min(3),
      assign: yup.string().required(),
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
    // eslint-disable-next-line no-console
    console.log(users);
  }, [isSubmitSuccessful, reset]);

  const formSubmit: SubmitHandler<ICreateCardData> = (data) => {
    if (task) {
      dispatch(
        updateTaskInfo({
          _id: task._id ?? '',
          title: data.title,
          description: data.description,
          users: data.assign,
        })
      );
      dispatch(fetchTask(data));
    } else {
      createNewTask(data);
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
          </InputWrapper>
          <PriorityTitle>{assign}</PriorityTitle>
          <SelectAssign {...register('assign')}>
            <option key={-1} disabled></option>
            {users!.map((option: IRegistredUser) => (
              <option key={option._id}>{option.name}</option>
            ))}
          </SelectAssign>

          {/* <PriorityTitle>{titlePriority}</PriorityTitle>
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
          </LabelWrapper> */}
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
