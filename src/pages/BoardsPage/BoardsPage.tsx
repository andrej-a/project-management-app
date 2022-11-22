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
import { setStatus } from '../../slices/modalsSlice/modalsSlice';
import { useEffect } from 'react';
import { fetchAllBoards } from '../../store/actions/actions';
import { path } from '../../service/constants';

const BoardsPage = () => {
  const { boards } = useAppSelector((state) => {
    return {
      boards: state.board.boards,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBoards(path.boards));
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
          <BoardsWrapper>{boardsList}</BoardsWrapper>
        </BoardsPanelWrapper>
      </div>
    </Wrapper>
  );
};

export default BoardsPage;
