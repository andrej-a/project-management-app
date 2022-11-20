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

const BoardsPage = () => {
  const { boards } = useAppSelector((state) => {
    return {
      boards: state.board.boards,
    };
  });
  const boardsList = boards.map((board) => <BoardSmallCard {...board} key={board._id} />);
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.boardsPage,
    };
  });
  const dispatch = useAppDispatch();
  const newBoardText = (
    <>
      {dictionary.Create} <br /> {dictionary['New Board']}
    </>
  );
  return (
    <Wrapper>
      <GreetingsPanel userName={userName} boards={boards} />
      <BoardsPanelWrapper>
        <NewElementButton
          text={newBoardText}
          handleClick={() => dispatch(setStatus('new_board'))}
        />
        <BoardsWrapper>{boardsList}</BoardsWrapper>
      </BoardsPanelWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
