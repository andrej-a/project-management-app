import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.components';

const BoardSmallCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <BoardSmallCardStyled>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{description}</BoardSmallDescription>
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
