import { Draggable } from 'react-beautiful-dnd';
/**MODELS */
import { ITask } from '../../../../models/ITask';
/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { TaskCardStyled, TaskCardDescription, TaskCardTitle } from './TaskCard.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
/**DISPATCH */
import {
  setDeletingValue,
  setRequestUrl,
  setStatus,
} from '../../../../slices/modalsSlice/modalsSlice';
import { setCurrentTask } from '../../../../slices/taskSlice/taskSlice';
import { path } from '../../../../models/requests';

const TaskCard = ({ task, dragIndex }: { task: ITask; dragIndex: number }) => {
  const { title, description, _id, boardId, columnId } = task;
  const { buttonColor } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_RED,
    };
  });
  const dispatch = useAppDispatch();
  return (
    <Draggable draggableId={_id} index={dragIndex}>
      {(providedDrag) => (
        <TaskCardStyled
          {...providedDrag.draggableProps}
          {...providedDrag.dragHandleProps}
          ref={providedDrag.innerRef}
          onClick={() => {
            dispatch(setCurrentTask(task));
            dispatch(setStatus('update_card'));
          }}
        >
          <TaskCardTitle>{title}</TaskCardTitle>
          <TaskCardDescription>{description}</TaskCardDescription>
          <SvgButton
            handleClick={() => {
              dispatch(setStatus('delete_item'));
              dispatch(setDeletingValue(task.title));
              dispatch(setRequestUrl(`${path.boards}/${boardId}/columns/${columnId}/tasks/${_id}`));
            }}
            color={buttonColor}
            icon={deleteIcon}
            stylish={{ position: 'absolute', right: '12px', top: '12px' }}
          />
        </TaskCardStyled>
      )}
    </Draggable>
  );
};

export default TaskCard;
