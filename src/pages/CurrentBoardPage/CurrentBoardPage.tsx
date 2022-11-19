/**STYLES */
import { InnerWrapper, Wrapper } from './CurrentBoardPage.styled';
/**HOOKS */
import { useAppSelector } from '../../hooks/hooks';
import PageHeader from './PageHeader/PageHeader';
import KanbanArea from './KanbanArea/KanbanArea';

const CurrentBoardPage = () => {
  const { board } = useAppSelector((state) => {
    return {
      board: state.board.board,
      columns: state.board.columns,
      tasks: state.board.tasks,
    };
  });

  return (
    <Wrapper>
      <InnerWrapper className="TEST">
        <PageHeader title={board.title} />
        <KanbanArea />
      </InnerWrapper>
    </Wrapper>
  );
};

export default CurrentBoardPage;
