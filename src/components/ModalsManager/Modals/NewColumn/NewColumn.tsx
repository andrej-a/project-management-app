/* STYLED */
import { BoardFrame, BoardCard } from '../New_Board/NewBoard.styled';
import { NewCardTitleWrapper, NewCardTitle } from '../NewCard/NewCard.styled';
/* HOOKS */
import { useAppSelector } from '../../../../hooks/hooks';
/* COMPONENTS */
import { NewColumnForm } from './Form/Form';
export const NewColumn = () => {
  const { title } = useAppSelector((state) => {
    return {
      title: state.language.lang.createColumn.title,
    };
  });
  return (
    <>
      <BoardFrame>
        <BoardCard>
          <NewCardTitleWrapper>
            <NewCardTitle>{title}</NewCardTitle>
          </NewCardTitleWrapper>
          <NewColumnForm />
        </BoardCard>
      </BoardFrame>
    </>
  );
};
