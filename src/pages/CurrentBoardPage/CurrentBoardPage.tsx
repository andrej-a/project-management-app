import { useEffect } from 'react';
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
