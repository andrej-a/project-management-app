import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect, useCallback } from 'react';
/**STYLES */
import { ColumnHeader, ColumnStyled, ColumnWrapper } from './Column.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
import plusIcon from '../../../../assets/img/plus.svg';
/**HOOKS */
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
/**MODELS */
import { IColumn } from '../../../../models/IColumn';
import { path } from '../../../../models/requests';
/**COMPONENTS */
import TaskCard from '../TaskCard/TaskCard';
import SvgButton from '../../../../components/SvgButton/SvgButton';
import ColumnTitle from './ColumtTitle';
/**DISPATCH */
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';
import { getBoardTasks } from '../../../../service/tasks/getBoardTasks';
import { setDeletingValue, setRequestUrl } from '../../../../slices/modalsSlice/modalsSlice';
import { setNewTaskColumnId } from '../../../../slices/taskSlice/taskSlice';
import { fetchAllTasks } from '../../../../slices/taskSlice/actions';
import { setLoading } from '../../../../slices/boardSlice/boardSlice';
const Column = ({ title, _id, dragIndex, boardId }: IColumn & { dragIndex: number }) => {
  const { tasks, buttonColor, currentBoard } = useAppSelector((state) => {
    return {
      tasks:
        [...state.task.tasks]
          .sort((a, b) => a.order - b.order)
          .filter((task) => task.columnId === _id) ?? [],
      buttonColor: state.application_theme.theme.TASK_TEXT,
      currentBoard: state.board.boards,
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
              handleClick={() => {
                dispatch(setStatus('delete_item'));
                dispatch(setDeletingValue(title));
                dispatch(setRequestUrl(`${path.boards}/${boardId}/columns/${_id}`));
              }}
            />
            <SvgButton
              color={buttonColor}
              icon={plusIcon}
              size={20}
              stylish={{ position: 'absolute', right: '0', top: '6px' }}
              handleClick={() => {
                dispatch(setNewTaskColumnId(_id));
                dispatch(setStatus('new_card'));
              }}
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
