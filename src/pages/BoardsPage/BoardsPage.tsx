import { useEffect } from 'react';
/**COMPONENTS */
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewElementButton from '../../components/NewElementButton/NewElementButton';
import { Spinner } from '../../components/Spinner/Spinner';
/**STYLES */
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**DISPATCH */
import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { setStatus } from '../../slices/modalsSlice/modalsSlice';
import { getAllUsersThunk } from '../../slices/userSlice/userSlice';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const BoardsPage = () => {
  const { dictionary, userName, boards, isLoading } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang,
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
      {dictionary.boardsPage.Create} <br /> {dictionary.createBoard.titleforBoardsPage}
    </>
  );
  return (
    <Wrapper>
      <GreetingsPanel userName={userName} boards={boards} />
      <ErrorBoundary>
        <div>
          <BoardsPanelWrapper className="BoardsPanelWrapper">
            <NewElementButton
              text={newBoardText}
              handleClick={() => dispatch(setStatus('new_board'))}
            />
            {isLoading ? <Spinner center={true} /> : <BoardsWrapper>{boardsList}</BoardsWrapper>}
          </BoardsPanelWrapper>
        </div>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default BoardsPage;
