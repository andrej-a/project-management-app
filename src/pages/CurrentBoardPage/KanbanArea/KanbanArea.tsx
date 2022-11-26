import { useCallback, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ClockLoader } from 'react-spinners';
/**COMPONENTS */
import NewElementButton from '../../../components/NewElementButton/NewElementButton';
import Column from './Column/Column';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
/**DISPATCH */
import { setStatus } from '../../../slices/modalsSlice/modalsSlice';
import { fetchAllColumns } from '../../../slices/columnSlice/actions';
import { setLoading } from '../../../slices/columnSlice/columnSlice';
/**STYLES */
import { KanbanWrapper } from './KanbanArea.styled';

const KanbanArea = () => {
  const { currentBoard, columns, dictionary, isLoading, spinnerColor } = useAppSelector((state) => {
    return {
      isLoading: state.column.isLoading,
      currentBoard: state.board.currentBoard,
      columns: [...state.column.columns]!.sort((a, b) => a.order - b.order),
      dictionary: state.language.lang.currentBoardPage,
      spinnerColor: state.application_theme.theme.MAIN_BACKGROUND,
    };
  });

  const getColumnsForCurrentPge = useCallback(() => {
    dispatch(fetchAllColumns(currentBoard!._id));
  }, [currentBoard]);

  useEffect(() => {
    dispatch(setLoading());
    getColumnsForCurrentPge();
  }, []);

  const dispatch = useAppDispatch();
  const columnsElements = columns.map((column, index) => (
    <Column {...column} key={column._id} dragIndex={index} />
  ));
  return (
    <Droppable droppableId={currentBoard!._id} type="column" direction="horizontal">
      {(provided) => (
        <KanbanWrapper
          className="KanbanWrapper"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {isLoading ? (
            <ClockLoader color={spinnerColor} />
          ) : (
            <>
              {columnsElements}
              {provided.placeholder}
              <NewElementButton
                text={dictionary['New column']}
                handleClick={() => dispatch(setStatus('add_column'))}
              />
            </>
          )}
        </KanbanWrapper>
      )}
    </Droppable>
  );
};

export default KanbanArea;
