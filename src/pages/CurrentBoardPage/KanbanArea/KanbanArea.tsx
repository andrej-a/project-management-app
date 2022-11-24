import { Droppable } from 'react-beautiful-dnd';
/**COMPONENTS */
import NewElementButton from '../../../components/NewElementButton/NewElementButton';
import Column from './Column/Column';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
/**DISPATCH */
import { setStatus } from '../../../slices/modalsSlice/modalsSlice';
/**STYLES */
import { KanbanWrapper } from './KanbanArea.styled';

const KanbanArea = () => {
  const { board, columns, dictionary } = useAppSelector((state) => {
    return {
      board: state.board.boards[0],
      columns: [...state.column.columns].sort((a, b) => a.order - b.order),
      dictionary: state.language.lang.currentBoardPage,
    };
  });

  const dispatch = useAppDispatch();
  const columnsElements = columns.map((column, index) => (
    <Column {...column} key={column._id} dragIndex={index} />
  ));
  return (
    <Droppable droppableId={board._id} type="column" direction="horizontal">
      {(provided) => (
        <KanbanWrapper
          className="KanbanWrapper"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {columnsElements}
          {provided.placeholder}
          <NewElementButton
            text={dictionary['New column']}
            handleClick={() => dispatch(setStatus('add_column'))}
          />
        </KanbanWrapper>
      )}
    </Droppable>
  );
};

export default KanbanArea;
