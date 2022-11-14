import { store } from '../../store/store';
import { BoardsWrapper, Wrapper } from './BoardsPage.components';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';

const BoardsPage = () => {
  return (
    <Wrapper>
      <GreetingsPanel />
      <BoardsWrapper></BoardsWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
