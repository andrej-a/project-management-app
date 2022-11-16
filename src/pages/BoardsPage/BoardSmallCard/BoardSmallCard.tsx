/**COMPONENTS */
import SvgButton from '../../../components/SvgButton/SvgButton';

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
import { IBoard } from '../../../models/IBoard';

const BoardSmallCard = ({ title, description }: IBoard) => {
  const { buttonColor } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.BUTTON_BORDER_COLOR_LIGHT,
    };
  });
  return (
    <BoardSmallCardStyled>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{description}</BoardSmallDescription>
      <SvgButton
        color={buttonColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
      />
      <SvgButton
        color={buttonColor}
        icon={editIcon}
        size={28}
        stylish={{ position: 'absolute', right: '44px', top: '14px' }}
      />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
