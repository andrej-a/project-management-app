/**STYLES */
import { InnerWrapper, Wrapper } from './CurrentBoardPage.styled';
/**HOOKS */
import { useAppSelector } from '../../hooks/hooks';
/**COMPONENTS */
import PageHeader from './PageHeader/PageHeader';
import KanbanArea from './KanbanArea/KanbanArea';

const CurrentBoardPage = () => {
  const { board } = useAppSelector((state) => {
    return {
      board: state.board.boards[0],
      columns: state.column.columns,
      tasks: state.task.tasks,
    };
  });
  return (
    <Wrapper className="Wrapper">
      <InnerWrapper className="innerWrapper">
        <PageHeader title={board.title} />
        <KanbanArea />
      </InnerWrapper>
    </Wrapper>
  );
};

export default CurrentBoardPage;
