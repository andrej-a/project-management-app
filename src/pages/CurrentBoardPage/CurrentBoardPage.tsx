/**STYLES */
import { InnerWrapper, Wrapper } from './CurrentBoardPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**COMPONENTS */
import PageHeader from './PageHeader/PageHeader';
import KanbanArea from './KanbanArea/KanbanArea';
import { useEffect } from 'react';
import { path } from '../../models/requests';
import { useParams } from 'react-router-dom';
import { fetchAllColumns } from '../../slices/columnSlice/actions';
import { fetchBoard } from '../../slices/boardSlice/actions';
import Spinner from '../../components/Spinner/Spinner';

const CurrentBoardPage = () => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => {
    return {
      board: state.board.currentBoard,
      columns: state.column.columns,
      tasks: state.task.tasks,
    };
  });

  useEffect(() => {
    dispatch(fetchBoard(boardId!));
    if (board) {
      // eslint-disable-next-line no-console
      console.log(board);
      dispatch(fetchAllColumns(boardId!));
    }
  }, []);

  return (
    <Wrapper className="Wrapper">
      {!board ? (
        <Spinner />
      ) : (
        <InnerWrapper className="innerWrapper">
          <PageHeader title={board!.title} />
          <KanbanArea />
        </InnerWrapper>
      )}
    </Wrapper>
  );
};

export default CurrentBoardPage;
