import DeleteBtn from './DeleteBtn/DeleteBtn';
import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.components';
import { store } from '../../../store/store';
const { TEXT_COLOR } = store.getState().application_theme;

const BoardSmallCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <BoardSmallCardStyled>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{description}</BoardSmallDescription>
      <DeleteBtn color={TEXT_COLOR} />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
