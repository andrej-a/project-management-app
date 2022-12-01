import { Link } from 'react-router-dom';
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
import clipIcon from '../../../assets/svg/clip.svg';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
/**MODELS */
import { IBoard } from '../../../models/IBoard';
import { path } from '../../../models/requests';
/**DISPATCH */
import {
  setStatus,
  setDeletingValue,
  setRequestUrl,
} from '../../../slices/modalsSlice/modalsSlice';
import { setCurrentBoard, setEditBoard } from '../../../slices/boardSlice/boardSlice';
import { HandySvg } from 'handy-svg';
import { emojiKey } from '../../../constants/emojiKey';

const BoardSmallCard = (board: IBoard) => {
  const { title, owner, _id } = board;
  const { buttonColor, disabledButtonColor, ownerName, curUser } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_BORDER_COLOR_LIGHT,
      disabledButtonColor: state.application_theme.theme.FRAME_TASK_COLOR,
      ownerName: state.user.users?.find((user) => user._id === owner)?.name ?? '',
      curUser: state.user.id,
    };
  });
  const dispatch = useAppDispatch();

  return (
    <BoardSmallCardStyled
      as={Link}
      to={`/board/${_id}`}
      onClick={() => {
        dispatch(setCurrentBoard(board));
      }}
    >
      <BoardSmallTitle>{title.split(emojiKey).reverse()}</BoardSmallTitle>
      <BoardSmallDescription>
        <HandySvg src={clipIcon} width={String(20)} height={String(20)} fill={buttonColor} />
        <span>{ownerName}</span>
      </BoardSmallDescription>
      <SvgButton
        color={board.owner === curUser ? buttonColor : disabledButtonColor}
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
        handleClick={() => {
          dispatch(setDeletingValue(`${board.title}`));
          dispatch(setRequestUrl(`${path.boards}/${board._id}`));
          dispatch(setStatus('delete_item'));
        }}
        disabled={board.owner !== curUser}
      />
      <SvgButton
        color={board.owner === curUser ? buttonColor : disabledButtonColor}
        icon={editIcon}
        size={28}
        stylish={{ position: 'absolute', right: '44px', top: '14px' }}
        handleClick={() => {
          dispatch(setEditBoard(board));
          dispatch(setStatus('update_board'));
        }}
        disabled={board.owner !== curUser}
      />
    </BoardSmallCardStyled>
  );
};

export default BoardSmallCard;
