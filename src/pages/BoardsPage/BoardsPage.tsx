/**COMPONENTS */
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewElementButton from '../../components/NewElementButton/NewElementButton';
/**STYLES */
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.styled';
/**HOOKS */
import { useAppSelector } from '../../hooks/hooks';
/**FAKE DATA */
import { userName, boards } from '../../temporalStates/temporalStates';

const BoardsPage = () => {
  const boardsList = boards.map((board) => <BoardSmallCard {...board} key={board.id} />);
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
      <BoardsPanelWrapper>
        <NewElementButton text={newBoardText} />
        <BoardsWrapper>{boardsList}</BoardsWrapper>
      </BoardsPanelWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
