import { store } from '../../store/store';
import BoardSmallCard from './BoardSmallCard/BoardSmallCard';
import { BoardsPanelWrapper, BoardsWrapper, Wrapper } from './BoardsPage.components';
import GreetingsPanel from './GreetingsPanel/GreetingsPanel';
import NewBoardButton from './NewBoardButton/NewBoardButton';

const BoardsPage = () => {
  return (
    <Wrapper>
      <GreetingsPanel />
      <BoardsPanelWrapper>
        <NewBoardButton></NewBoardButton>
        <BoardsWrapper>
          <BoardSmallCard title="Board name" description="Shor description...." />
          <BoardSmallCard title="Board name" description="Shor description...." />
          <BoardSmallCard title="Board name" description="Shor description...." />
          <BoardSmallCard title="Board name" description="Shor description...." />
          <BoardSmallCard title="Board name" description="Shor description...." />
          <BoardSmallCard
            title="Board name"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint maxime reiciendis distinctio tempore? Cumque ea sapiente, officiis, similique, magni praesentium architecto cupiditate animi aperiam aut asperiores temporibus illum delectus magnam."
          />
        </BoardsWrapper>
      </BoardsPanelWrapper>
    </Wrapper>
  );
};

export default BoardsPage;
