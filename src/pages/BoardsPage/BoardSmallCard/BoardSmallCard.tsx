/**COMPONENTS */
import DeleteBtn from './DeleteBtn/DeleteBtn';
/**STYLES */
import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.components';
/**HOOKS */
import { useAppSelector } from '../../../hooks/hooks';

const BoardSmallCard = ({ title, description }: { title: string; description: string }) => {
  const { textColor } = useAppSelector((state) => {
    return {
      textColor: state.application_theme.TEXT_COLOR,
    };
  });
  return (
    <BoardSmallCardStyled>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{description}</BoardSmallDescription>
      <DeleteBtn color={textColor} />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
