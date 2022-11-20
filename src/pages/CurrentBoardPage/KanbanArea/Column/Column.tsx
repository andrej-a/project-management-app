/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { ColumnHeader, ColumnStyled, ColumnWrapper } from './Column.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
import plusIcon from '../../../../assets/img/plus.svg';
/**HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/**MODELS */
import { IColumn } from '../../../../models/IColumn';
/**COMPONENTS */
import TaskCard from '../TaskCard/TaskCard';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';
import ColumnTitle from './ColumtTitle';

const Column = ({ title, _id, dragIndex }: IColumn & { dragIndex: number }) => {
  const { tasks, buttonColor } = useAppSelector((state) => {
    return {
      tasks: state.board.tasks.filter((task) => task.columnId === _id) ?? [],
      buttonColor: state.application_theme.theme.TASK_TEXT,
    };
  });
  const dispatch = useAppDispatch();
  const taskElements = tasks.map((task, index) => (
    <TaskCard task={task} key={task._id} dragIndex={index} />
  ));
  return (
    <Draggable draggableId={_id} index={dragIndex}>
      {(providedDrag) => (
        <ColumnWrapper
          {...providedDrag.draggableProps}
          {...providedDrag.dragHandleProps}
          ref={providedDrag.innerRef}
        >
          <ColumnHeader>
            <ColumnTitle title={title} id={_id} />
            <SvgButton
              color={buttonColor}
              icon={deleteIcon}
              stylish={{ position: 'absolute', right: '30px' }}
              handleClick={() => dispatch(setStatus('delete_item'))}
            />
            <SvgButton
              color={buttonColor}
              icon={plusIcon}
              size={20}
              stylish={{ position: 'absolute', right: '0', top: '6px' }}
              handleClick={() => dispatch(setStatus('new_card'))}
            />
          </ColumnHeader>
          <Droppable droppableId={_id} type="task" direction="vertical">
            {(providedDrop) => (
              <ColumnStyled ref={providedDrop.innerRef} {...providedDrop.droppableProps}>
                {taskElements}
                {providedDrop.placeholder}
              </ColumnStyled>
            )}
          </Droppable>
        </ColumnWrapper>
      )}
    </Draggable>
  );
};

export default Column;
