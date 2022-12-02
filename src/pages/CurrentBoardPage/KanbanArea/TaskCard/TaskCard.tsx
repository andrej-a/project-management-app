import { Draggable } from 'react-beautiful-dnd';
/**MODELS */
import { ITask } from '../../../../models/ITask';
/**COMPONENTS */
import SvgButton from '../../../../components/SvgButton/SvgButton';
/**STYLES */
import { TaskCardStyled, TaskCardDescription, TaskCardTitle, Priority } from './TaskCard.styled';
import deleteIcon from '../../../../assets/img/delete.svg';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
/**DISPATCH */
import {
  setDeletingValue,
  setRequestUrl,
  setStatus,
} from '../../../../slices/modalsSlice/modalsSlice';
import { setCurrentTask } from '../../../../slices/taskSlice/taskSlice';
import { path } from '../../../../models/requests';
import { priorityKey } from '../../../../constants/priorityKey';
import ReactTooltip from 'react-tooltip';
import { themeEnum } from '../../../../constants/localStorage';

const TaskCard = ({ task, dragIndex }: { task: ITask; dragIndex: number }) => {
  const { title, description, _id, boardId, columnId, userId } = task;
  const {
    buttonColor,
    currentUser,
    disabledButtonColor,
    boardOwner,
    priority,
    assignedTxt,
    ownerTxt,
    assignName,
    ownerName,
    theme,
    hintColor,
  } = useAppSelector((state) => {
    return {
      buttonColor: state.application_theme.theme.BUTTON_RED,
      currentUser: state.user.id,
      boardOwner: state.board.currentBoard?.owner,
      disabledButtonColor: state.application_theme.theme.FRAME_TASK_COLOR,
      hintColor: state.application_theme.theme.TEXT_COLOR_DARK,
      priority: state.language.lang.createCard.priority,
      assignedTxt: state.language.lang.view_card.assign,
      ownerTxt: state.language.lang.view_card.owner,
      assignName: task.users.map((user) =>
        state.user.users ? state.user.users.find((name) => name._id === user)?.name : ''
      ),
      ownerName: state.user.users
        ? state.user.users.find((user) => user._id === task.userId)?.name
        : '',
      theme: state.application_theme.theme.CURRENT_THEME,
    };
  });
  const dispatch = useAppDispatch();
  return (
    <>
      <ReactTooltip
        id={_id}
        place="right"
        backgroundColor={disabledButtonColor}
        textColor={hintColor}
        multiline
        insecure
        padding="20px 15px"
      >
        <div className="assign">
          {!!assignName.length && (
            <div>
              <span>{assignedTxt}</span> {assignName?.join(', ')}
            </div>
          )}
          <div>
            <span>{ownerTxt}</span> {ownerName}
          </div>
        </div>
      </ReactTooltip>
      <Draggable draggableId={_id} index={dragIndex}>
        {(providedDrag) => (
          <TaskCardStyled
            data-tip
            data-for={_id}
            {...providedDrag.draggableProps}
            {...providedDrag.dragHandleProps}
            ref={providedDrag.innerRef}
            onClick={() => {
              dispatch(setCurrentTask(task));
              if (currentUser === userId || currentUser === boardOwner)
                dispatch(setStatus('update_card'));
              else dispatch(setStatus('view_card'));
            }}
          >
            <TaskCardTitle>{title.split(priorityKey)[0]}</TaskCardTitle>
            <TaskCardDescription>
              {description.split(/(\n|\r)+/).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </TaskCardDescription>
            <SvgButton
              handleClick={() => {
                dispatch(setStatus('delete_item'));
                dispatch(setDeletingValue(task.title.split(priorityKey)[0]));
                dispatch(
                  setRequestUrl(`${path.boards}/${boardId}/columns/${columnId}/tasks/${_id}`)
                );
              }}
              color={
                currentUser === userId || currentUser === boardOwner
                  ? buttonColor
                  : disabledButtonColor
              }
              icon={deleteIcon}
              stylish={{ position: 'absolute', right: '12px', top: '12px' }}
              disabled={currentUser !== userId && currentUser !== boardOwner}
            />
            <Priority className={title.split(priorityKey)[1]}>
              {priority[title.split(priorityKey)[1] as 'high' | 'low' | 'medium'] ?? ''}
            </Priority>
          </TaskCardStyled>
        )}
      </Draggable>
    </>
  );
};

export default TaskCard;
