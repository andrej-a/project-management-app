import { useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { useAppSelector } from '../../hooks/hooks';
import { IBoard } from '../../models/IBoard';
import BoardSmallCard from '../BoardsPage/BoardSmallCard/BoardSmallCard';
import { BoardsWrapper } from '../BoardsPage/BoardsPage.styled';
import { AreaWrapper, Wrapper } from './SearchPage.styled';

const SearchPage = () => {
  const { dictionary, allBoards } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang,
      allBoards: state.board.boards,
    };
  });
  const [search, setSearch] = useState<string>('');
  const [option, setOption] = useState<string>('');
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    if (search === '') {
      setBoards([]);
    } else {
      const searchedBoards = allBoards.filter((board) =>
        board.title.toLowerCase().includes(search.toLowerCase())
      );
      setBoards(searchedBoards);
    }
  }, [search]);

  return (
    <Wrapper>
      <Search setSearch={(value: string) => setSearch(value)} search={search} />
      <AreaWrapper>
        {boards.length > 0 ? (
          <BoardsWrapper>
            {boards.map((board) => {
              return <BoardSmallCard {...board} key={board._id} />;
            })}
          </BoardsWrapper>
        ) : (
          <p>{dictionary.header.SearchNothing}</p>
        )}
      </AreaWrapper>
    </Wrapper>
  );
};

export default SearchPage;
