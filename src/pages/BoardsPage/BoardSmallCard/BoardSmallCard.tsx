/**COMPONENTS */
import SvgButton from '../../../components/SvgButton/SvgButton';
/**STYLES */
import {
  BoardSmallCardStyled,
  BoardSmallDescription,
  BoardSmallTitle,
} from './BoardSmallCard.styled';
import deleteIcon from '../../../assets/img/delete.svg';
import editIcon from '../../../assets/img/edit.svg';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
/**MODELS */
import { IBoard } from '../../../models/IBoard';
/**DISPATCH */
import { setStatus } from '../../../slices/modalsSlice/modalsSlice';
import { setCurrentBoard } from '../../../slices/boardSlice/boardSlice';
import { Link } from 'react-router-dom';

const BoardSmallCard = (board: IBoard) => {
  const { title, owner, _id } = board;
  const { buttonColor } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_BORDER_COLOR_LIGHT,
    };
  });
  const dispatch = useAppDispatch();

  return (
    <BoardSmallCardStyled as={Link} to={`/board/${_id}`}>
      <BoardSmallTitle>{title}</BoardSmallTitle>
      <BoardSmallDescription>{owner}</BoardSmallDescription>
      <SvgButton
        color={buttonColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
        handleClick={() => dispatch(setStatus('delete_item'))}
      />
      <SvgButton
        color={buttonColor}
        icon={editIcon}
        size={28}
        stylish={{ position: 'absolute', right: '44px', top: '14px' }}
        handleClick={() => {
          dispatch(setCurrentBoard(board));
          dispatch(setStatus('update_board'));
        }}
      />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
