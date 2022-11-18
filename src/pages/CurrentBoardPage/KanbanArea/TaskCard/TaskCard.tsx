import { ITask } from '../../../../models/ITask';
/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { TaskCardStyled, TaskCardDescription, TaskCardTitle } from './TaskCard.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
/**HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { setTasks } from '../../../../slices/boardSlice/boardSlice';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ title, description, _id, dragIndex }: ITask & { dragIndex: number }) => {
  const { buttonColor } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_RED,
    };
  });

  return (
    <Draggable draggableId={_id} index={dragIndex}>
      {(providedDrag) => (
        <TaskCardStyled
          {...providedDrag.draggableProps}
          {...providedDrag.dragHandleProps}
          ref={providedDrag.innerRef}
        >
          <TaskCardTitle>{title}</TaskCardTitle>
          <TaskCardDescription>{description}</TaskCardDescription>
          <SvgButton
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
