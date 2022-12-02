import SvgButton from '../../components/SvgButton/SvgButton';
import { priorityKey } from '../../constants/priorityKey';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ITask } from '../../models/ITask';
import { path } from '../../models/requests';
import { setStatus, setDeletingValue, setRequestUrl } from '../../slices/modalsSlice/modalsSlice';
import {
  Priority,
  TaskCardDescription,
  TaskCardStyled,
  TaskCardTitle,
} from '../CurrentBoardPage/KanbanArea/TaskCard/TaskCard.styled';
import deleteIcon from '../../assets/img/delete.svg';
import { Link } from 'react-router-dom';
import { fetchBoard } from '../../slices/boardSlice/actions';

type Props = {
  task: ITask;
};

export const SearchTaskCard = ({ task }: Props) => {
  const { title, description, _id, boardId, columnId, userId } = task;
  const { buttonColor, currentUser, disabledButtonColor, boardOwner, priority } = useAppSelector(
    (state) => {
      return {
        buttonColor: state.application_theme.theme.BUTTON_RED,
        currentUser: state.user.id,
        boardOwner: state.board.currentBoard?.owner,
        disabledButtonColor: state.application_theme.theme.FRAME_TASK_COLOR,
        priority: state.language.lang.createCard.priority,
      };
    }
  );
  const dispatch = useAppDispatch();
  return (
    <TaskCardStyled
      as={Link}
      to={`/board/${boardId}`}
      onClick={() => {
        dispatch(fetchBoard(boardId));
      }}
    >
      <TaskCardTitle>{title.split(priorityKey)[0]}</TaskCardTitle>
      <TaskCardDescription>{description}</TaskCardDescription>
      <SvgButton
        handleClick={() => {
          dispatch(setStatus('delete_item'));
          dispatch(setDeletingValue(task.title.split(priorityKey)[0]));
          dispatch(setRequestUrl(`${path.boards}/${boardId}/columns/${columnId}/tasks/${_id}`));
        }}
        color={
          currentUser === userId || currentUser === boardOwner ? buttonColor : disabledButtonColor
        }
        icon={deleteIcon}
        stylish={{ position: 'absolute', right: '12px', top: '12px' }}
        disabled={currentUser !== userId && currentUser !== boardOwner}
      />
      <Priority className={title.split(priorityKey)[1]}>
        {priority[title.split(priorityKey)[1] as 'high' | 'low' | 'medium'] ?? ''}
      </Priority>
    </TaskCardStyled>
  );
};
