import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { BoardFrame, BoardCard } from '../New_Board/NewBoard.styled';
import { NewCardForm } from './Form/NewCardForm';
/* STYLES */
import { NewCardTitleWrapper, NewCardTitle } from './NewCard.styled';
export const NewCard = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.language.lang.createCard.title,
    };
  });
  return (
    <>
      <BoardFrame>
        <BoardCard>
          <NewCardTitleWrapper>
            <NewCardTitle>{title}</NewCardTitle>
            <NewCardForm />
          </NewCardTitleWrapper>
        </BoardCard>
      </BoardFrame>
    </>
  );
};
