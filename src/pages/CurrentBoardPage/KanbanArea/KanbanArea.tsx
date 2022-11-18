import NewElementButton from '../../../components/NewElementButton/NewElementButton';
import { useAppSelector } from '../../../hooks/hooks';
import Column from './Column/Column';
import { KanbanWrapper } from './KanbanArea.styled';

const KanbanArea = () => {
  const { board, columns, tasks, dictionary } = useAppSelector((state) => {
    return {
      board: state.board.board,
      columns: state.board.columns,
      tasks: state.board.tasks,
      dictionary: state.language.lang.currentBoardPage,
    };
  });
  const columnsElements = columns.map((column) => (
    <Column title={column.title} _id={column._id} key={column._id} />
  ));
  return (
    <KanbanWrapper>
      {columnsElements}
      <NewElementButton text={dictionary['New column']} />
    </KanbanWrapper>
  );
};

export default KanbanArea;
