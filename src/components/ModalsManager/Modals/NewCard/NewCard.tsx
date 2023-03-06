import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { BoardFrame, BoardCard } from '../New_Board/NewBoard.styled';
import { NewCardForm } from './Form/NewCardForm';
/* STYLES */
import { NewCardTitleWrapper, NewCardTitle } from './NewCard.styled';
export const NewCard = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.task.currentTask
        ? state.language.lang.updateCard.title
        : state.language.lang.createCard.title,
    };
  });
  return (
    <>
      <BoardFrame className="BoardFrame">
        <BoardCard className="BoardCard">
          <NewCardTitleWrapper className="NewCardTitleWrapper">
            <NewCardTitle>{title}</NewCardTitle>
            <NewCardForm />
          </NewCardTitleWrapper>
        </BoardCard>
      </BoardFrame>
    </>
  );
};
