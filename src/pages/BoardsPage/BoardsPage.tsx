import { useEffect } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
/**COMPONENTS */
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewElementButton from '../../components/NewElementButton/NewElementButton';
/**STYLES */
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**DISPATCH */
import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { setStatus } from '../../slices/modalsSlice/modalsSlice';
import { getAllUsersThunk } from '../../slices/userSlice/userSlice';

const BoardsPage = () => {
  const { dictionary, spinnerColor, userName, boards, isLoading } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.boardsPage,
      spinnerColor: state.application_theme.theme.TEXT_COLOR_DARK,
      userName: state.user.name ?? 'Stranger',
      boards: state.board.boards,
      isLoading: state.board.isLoading,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBoards());
    dispatch(getAllUsersThunk());
  }, []);

  const boardsList = boards.map((board) => <BoardSmallCard {...board} key={board._id} />);

  const newBoardText = (
    <>
      {dictionary.Create} <br /> {dictionary['New Board']}
    </>
  );
  return (
    <Wrapper>
      <GreetingsPanel userName={userName} boards={boards} />
      <div>
        <BoardsPanelWrapper className="BoardsPanelWrapper">
          <NewElementButton
            text={newBoardText}
            handleClick={() => dispatch(setStatus('new_board'))}
          />
          {isLoading ? (
            <ClockLoader color={spinnerColor} />
          ) : (
            <BoardsWrapper>{boardsList}</BoardsWrapper>
          )}
        </BoardsPanelWrapper>
      </div>
    </Wrapper>
  );
};

export default BoardsPage;
