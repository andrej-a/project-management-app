/* STYLES */
import { BoardFrame, BoardCard, LogInTitleWrapper, LogInTitle } from './NewBoard.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { CreateBoardForm } from './Form/Form';
export const NewBoard = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.board.currentBoard
        ? state.language.lang.updateBoard.title
        : state.language.lang.createBoard.title,
    };
  });
  return (
    <>
      <BoardFrame>
        <BoardCard>
          <LogInTitleWrapper>
            <LogInTitle>{title}</LogInTitle>
          </LogInTitleWrapper>
          <CreateBoardForm />
        </BoardCard>
      </BoardFrame>
    </>
  );
};
