/* STYLES */
import { BoardFrame, BoardCard, LogInTitleWrapper, LogInTitle } from './NewBoard.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { CreateBoardForm } from './Form/Form';
export const NewBoard = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.language.createBoard.title,
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
