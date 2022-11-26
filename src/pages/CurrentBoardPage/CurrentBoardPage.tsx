import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
/**STYLES */
import { InnerWrapper, Wrapper } from './CurrentBoardPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**COMPONENTS */
import PageHeader from './PageHeader/PageHeader';
import KanbanArea from './KanbanArea/KanbanArea';

import { fetchAllColumns } from '../../slices/columnSlice/actions';
import { fetchBoard } from '../../slices/boardSlice/actions';

const CurrentBoardPage = () => {
  const { boardId } = useParams();

  const dispatch = useAppDispatch();
  const { board, spinnerColor } = useAppSelector((state) => {
    return {
      board: state.board.currentBoard,
      columns: state.column.columns,
      tasks: state.task.tasks,
      spinnerColor: state.application_theme.theme.MAIN_BACKGROUND,
    };
  });

  const cbFetchBoards = useCallback(() => {
    if (!board) {
      dispatch(fetchBoard(boardId!));
    } else {
      dispatch(fetchAllColumns(board._id));
    }
  }, [board]);

  useEffect(() => {
    cbFetchBoards();
  }, [board]);

  return (
    <Wrapper className="Wrapper">
      {!board ? (
        <ClockLoader color={spinnerColor} />
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
