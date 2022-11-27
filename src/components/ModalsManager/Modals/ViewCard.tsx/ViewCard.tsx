import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import SvgButton from '../../../SvgButton/SvgButton';
/* COMPONENTS */
import { BoardFrame, BoardCard } from '../New_Board/NewBoard.styled';
/* STYLES */
import crossIcon from '../../../../assets/img/cross.svg';
import { NewCardTitleWrapper, NewCardTitle } from './NewCard.styled';
import { setStatus } from '../../../../slices/modalsSlice/modalsSlice';
export const ViewCard = () => {
  const dispatch = useAppDispatch();
  const { task, assignName, ownerName, buttonColor } = useAppSelector((state) => {
    return {
      task: state.task.currentTask,
      assignName: state.user.users
        ? state.user.users.find((user) => user._id === state.task.currentTask?.users[0])?.name
        : '',
      ownerName: state.user.users
        ? state.user.users.find((user) => user._id === state.task.currentTask?.userId)?.name
        : '',
      buttonColor: state.application_theme.theme.TEXT_COLOR_DARK,
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
              stylish={{ position: 'absolute', right: '20px', top: '20px' }}
              handleClick={() => {
                dispatch(setStatus('hidden'));
              }}
            />
            <NewCardTitle>{task?.title ?? ''}</NewCardTitle>
            <div className="description">{task?.description ?? ''}</div>
            <div className="assign">
              <div>
                <span>Assigned to:</span> {assignName}
              </div>
              <div>
                <span>Owner:</span> {ownerName}
              </div>
            </div>
          </NewCardTitleWrapper>
        </BoardCard>
      </BoardFrame>
    </>
  );
};
