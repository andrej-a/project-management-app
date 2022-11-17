import { useState } from 'react';
import { Search } from '../../components/Search/Search';
import { useAppSelector } from '../../hooks/hooks';
import { IBoard } from '../../models/IBoard';
import BoardSmallCard from '../BoardsPage/BoardSmallCard/BoardSmallCard';
import { BoardsWrapper } from '../BoardsPage/BoardsPage.components';
import { Wrapper } from './SearchPage.styled';

const SearchPage = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language,
    };
  });

  const [boards, setBoards] = useState<IBoard[]>([]);
  return (
    <Wrapper>
      <Search />
      {boards.length > 0 ? (
        <BoardsWrapper>
          {boards.map((board) => {
            return (
              <BoardSmallCard title={board.title} description={board.description} key={board.id} />
            );
          })}
        </BoardsWrapper>
      ) : (
        <p>{dictionary.header.SearchNothing}</p>
      )}
    </Wrapper>
  );
};

export default SearchPage;
