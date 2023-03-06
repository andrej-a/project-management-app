/* STYLES */
import { BoardFrame, BoardCard, LogInTitleWrapper, LogInTitle } from './NewBoard.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { CreateBoardForm } from './Form/Form';
export const NewBoard = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.board.editBoard
        ? state.language.lang.updateBoard.title
        : state.language.lang.createBoard.title,
    };
  });
  return (
    <>
      <BoardFrame className="BoardFrame">
        <BoardCard className="BoardCard">
          <LogInTitleWrapper className="LogInTitleWrapper">
            <LogInTitle className="LogInTitle">{title}</LogInTitle>
          </LogInTitleWrapper>
          <CreateBoardForm />
        </BoardCard>
      </BoardFrame>
    </>
  );
};
