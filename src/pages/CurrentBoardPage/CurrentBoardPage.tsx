import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/**STYLES */
import { InnerWrapper, Wrapper } from './CurrentBoardPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**COMPONENTS */
import PageHeader from './PageHeader/PageHeader';
import KanbanArea from './KanbanArea/KanbanArea';
import { Spinner } from '../../components/Spinner/Spinner';

import { fetchAllColumns } from '../../slices/columnSlice/actions';
import { fetchBoard } from '../../slices/boardSlice/actions';
import { getBoardTasks } from '../../service/tasks/getBoardTasks';

const CurrentBoardPage = () => {
  const { boardId } = useParams();

  const dispatch = useAppDispatch();
  const { board } = useAppSelector((state) => {
    return {
      board: state.board.currentBoard,
    };
  });

  const cbFetchBoards = useCallback(() => {
    if (!board) {
      dispatch(fetchBoard(boardId!));
      getBoardTasks(boardId!);
    } else {
      dispatch(fetchAllColumns(board._id));
      getBoardTasks(board._id);
    }
  }, [board]);

  useEffect(() => {
    cbFetchBoards();
  }, [board]);

  return (
    <Wrapper className="Wrapper">
      {!board ? (
        <Spinner center={true} />
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
