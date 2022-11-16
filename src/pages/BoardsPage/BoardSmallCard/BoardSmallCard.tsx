/**COMPONENTS */
import BoardCardBtn from './BoardCardBtnStyled/BoardCardBtn';
/**STYLES */
import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.components';
/**STYLES */
import deleteIcon from '../../../assets/img/delete.svg';
import editIcon from '../../../assets/img/edit.svg';
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
      <BoardCardBtn
        color={textColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
      />
      <BoardCardBtn
        color={textColor}
        icon={editIcon}
        size={28}
        stylish={{ position: 'absolute', right: '44px', top: '14px' }}
      />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
