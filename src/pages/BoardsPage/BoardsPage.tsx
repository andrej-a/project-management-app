/**COMPONENTS */
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewElementButton from '../../components/NewElementButton/NewElementButton';
/**STYLES */
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.components';
/**HOOKS */
import { useAppSelector } from '../../hooks/hooks';
/**FAKE DATA */
import { userName, boards } from '../../temporalStates/temporalStates';

const BoardsPage = () => {
  const boardsList = boards.map((board) => <BoardSmallCard {...board} key={board.id} />);
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.boardsPage,
    };
  });
  const newBoardText = (
    <>
      {dictionary.Create} <br /> {dictionary['new Board']}
    </>
  );
  return (
    <Wrapper>
      <GreetingsPanel userName={userName} boards={boards} />
      <BoardsPanelWrapper>
        <NewElementButton text={newBoardText} />
        <BoardsWrapper>{boardsList}</BoardsWrapper>
      </BoardsPanelWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
