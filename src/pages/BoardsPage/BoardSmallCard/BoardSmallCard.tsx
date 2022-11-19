/**COMPONENTS */
import SvgButton from '../../../components/SvgButton/SvgButton';

/**STYLES */
import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.styled';
/**STYLES */
import deleteIcon from '../../../assets/img/delete.svg';
import editIcon from '../../../assets/img/edit.svg';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { IBoard } from '../../../models/IBoard';
import { setStatus } from '../../../slices/modalsSlice/modalsSlice';

const BoardSmallCard = ({ title, owner }: IBoard) => {
  const { textColor, buttonColor } = useAppSelector((state) => {
    return {
      textColor: state.application_theme.theme.TEXT_COLOR,
      buttonColor: state.application_theme.theme.BUTTON_BORDER_COLOR_LIGHT,
    };
  });
  const dispatch = useAppDispatch();
  return (
    <BoardSmallCardStyled>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{owner}</BoardSmallDescription>
      <SvgButton
        color={buttonColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
        //handleClick={() => {}} //РЕДАКТИРОВАНИЕ БОРДА
      />
      <SvgButton
        color={buttonColor}
        icon={editIcon}
        size={28}
        stylish={{ position: 'absolute', right: '44px', top: '14px' }}
        handleClick={() => dispatch(setStatus('delete_item'))}
      />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
