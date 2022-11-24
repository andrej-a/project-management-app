/* eslint-disable no-console */
/**COMPONENTS */
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewElementButton from '../../components/NewElementButton/NewElementButton';
/**STYLES */
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.styled';
/**HOOKS */
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
/**FAKE DATA */
import { userName } from '../../temporalStates/temporalStates';
/**DISPATCH */
import { useEffect } from 'react';
import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { setStatus } from '../../slices/modalsSlice/modalsSlice';
import Spinner from '../../components/Spinner/Spinner';

const BoardsPage = () => {
  const { boards, isLoading } = useAppSelector((state) => {
    return {
      boards: state.board.boards,
      isLoading: state.board.isLoading,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBoards());
  }, []);

  const boardsList = boards.map((board) => <BoardSmallCard {...board} key={board._id} />);
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.boardsPage,
    };
  });

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
          {isLoading ? <Spinner /> : <BoardsWrapper>{boardsList}</BoardsWrapper>}
        </BoardsPanelWrapper>
      </div>
    </Wrapper>
  );
};

export default BoardsPage;
