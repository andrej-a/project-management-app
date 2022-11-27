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
  const { title, description, _id, boardId, columnId, userId } = task;
  const { buttonColor, currentUser, disabledButtonColor, boardOwner } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_RED,
      currentUser: state.user.id,
      boardOwner: state.board.currentBoard?.owner,
      disabledButtonColor: state.application_theme.theme.FRAME_TASK_COLOR,
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
            if (currentUser === userId) dispatch(setStatus('update_card'));
            else dispatch(setStatus('view_card'));
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
            color={
              currentUser === userId || currentUser === boardOwner
                ? buttonColor
                : disabledButtonColor
            }
            icon={deleteIcon}
            stylish={{ position: 'absolute', right: '12px', top: '12px' }}
            disabled={currentUser !== userId && currentUser !== boardOwner}
          />
        </TaskCardStyled>
      )}
    </Draggable>
  );
};

export default TaskCard;
