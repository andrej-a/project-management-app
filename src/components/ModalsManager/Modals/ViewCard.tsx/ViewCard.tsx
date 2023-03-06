import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import SvgButton from '../../../SvgButton/SvgButton';
/* COMPONENTS */
import { BoardFrame, BoardCard } from '../New_Board/NewBoard.styled';
/* STYLES */
import crossIcon from '../../../../assets/img/cross.svg';
import { NewCardTitleWrapper, NewCardTitle } from './NewCard.styled';
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';
import { priorityKey } from '../../../../constants/priorityKey';
import { Priority } from '../../../../pages/CurrentBoardPage/KanbanArea/TaskCard/TaskCard.styled';
import { setCurrentTask } from '../../../../slices/taskSlice/taskSlice';
export const ViewCard = () => {
  const dispatch = useAppDispatch();

  const { task, assignName, ownerName, buttonColor, assignedTxt, ownerTxt, priority } =
    useAppSelector((state) => {
      return {
        task: state.task.currentTask,
        assignName: state.task.currentTask?.users.map((user) =>
          state.user.users ? state.user.users.find((name) => name._id === user)?.name : ''
        ),

        ownerName: state.user.users
          ? state.user.users.find((user) => user._id === state.task.currentTask?.userId)?.name
          : '',
        buttonColor: state.application_theme.theme.TEXT_COLOR_DARK,
        assignedTxt: state.language.lang.view_card.assign,
        ownerTxt: state.language.lang.view_card.owner,
        priority: state.language.lang.createCard.priority,
      };
    });
  return (
    <>
      <BoardFrame>
        <BoardCard>
          <NewCardTitleWrapper>
            <SvgButton
              color={buttonColor}
              icon={crossIcon}
              size={20}
              stylish={{ position: 'absolute', right: '-15px', top: '-15px' }}
              handleClick={() => {
                dispatch(setStatus('hidden'));
                dispatch(setCurrentTask(undefined));
              }}
            />
            <NewCardTitle>{task?.title.split(priorityKey)[0] ?? ''}</NewCardTitle>
            <div className="description">
              {task?.description.split(/(\n|\r)+/).map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </div>
            <div className="assign">
              <div>
                <span>{assignedTxt}</span> {assignName?.join(', ')}
              </div>
              <div>
                <span>{ownerTxt}</span> {ownerName}
              </div>
            </div>
            <Priority className={task?.title.split(priorityKey)[1] ?? ''}>
              {priority[task?.title.split(priorityKey)[1] as 'high' | 'low' | 'medium'] ?? ''}
            </Priority>
          </NewCardTitleWrapper>
        </BoardCard>
      </BoardFrame>
    </>
  );
};
