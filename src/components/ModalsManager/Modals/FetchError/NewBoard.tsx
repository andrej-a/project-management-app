/* STYLES */
import { BoardFrame, LogInTitle } from './NewBoard.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */


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
        <LogInTitle className="LogInTitle">{title}</LogInTitle>
      </BoardFrame>
    </>
  );
};
