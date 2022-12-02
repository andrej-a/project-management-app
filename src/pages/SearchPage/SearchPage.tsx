import { useEffect, useState } from 'react';

import { Search } from '../../components/Search/Search';
import BoardSmallCard from '../BoardsPage/BoardSmallCard/BoardSmallCard';
import { SearchTaskCard } from './SearchTask';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { fetchAllUserTasks } from '../../slices/taskSlice/actions';

import { BoardsWrapper } from '../BoardsPage/BoardsPage.styled';
import { AreaWrapper, Wrapper } from './SearchPage.styled';
import { priorityKey } from '../../constants/priorityKey';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { emojiKey } from '../../constants/emojiKey';
import { setAllSearchedBoards } from '../../slices/boardSlice/boardSlice';
import { setAllSearchedTasks } from '../../slices/taskSlice/taskSlice';

const SearchPage = () => {
  const {
    dictionary,
    allBoards,
    allUserTasks,
    isLoadingBoards,
    allSearchedBoards,
    allSearchedTasks,
  } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang,
      allBoards: state.board.boards,
      allUserTasks: state.task.allUserTasks,
      isLoadingBoards: state.board.isLoading,
      allSearchedBoards: state.board.allSearchedBoards,
      allSearchedTasks: state.task.allSearchedTasks,
    };
  });

  const [search, setSearch] = useState<string>('');
  const [isOptionIsBoard, setIsOptionIsBoard] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search === '') {
      dispatch(setAllSearchedBoards([]));
      dispatch(setAllSearchedTasks([]));
    } else {
      if (isOptionIsBoard) {
        dispatch(setAllSearchedTasks([]));
        const searchedBoards = allBoards.filter((board) =>
          board.title.split(emojiKey)[0].toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setAllSearchedBoards(searchedBoards));
      } else {
        dispatch(setAllSearchedBoards([]));
        const searchedTasks = allUserTasks.filter((task) =>
          task.title.split(priorityKey)[0].toLowerCase().includes(search.toLowerCase())
        );
        dispatch(setAllSearchedTasks(searchedTasks));
      }
    }
  }, [search]);

  useEffect(() => {
    dispatch(fetchAllBoards());
    isLoadingBoards && dispatch(fetchAllUserTasks(allBoards));
  }, []);

  useEffect(() => {
    dispatch(fetchAllUserTasks(allBoards));
  }, [allBoards]);

  return (
    <Wrapper>
      <ErrorBoundary>
        <Search
          setSearch={(value: string) => setSearch(value)}
          search={search}
          setOption={(value: boolean) => setIsOptionIsBoard(value)}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <AreaWrapper>
          {allSearchedBoards.length > 0 ? (
            <BoardsWrapper>
              {allSearchedBoards.map((board) => {
                return <BoardSmallCard {...board} key={board._id} />;
              })}
            </BoardsWrapper>
          ) : allSearchedTasks.length > 0 ? (
            <BoardsWrapper>
              {allSearchedTasks.map((task) => (
                <SearchTaskCard task={task} key={task._id} />
              ))}
            </BoardsWrapper>
          ) : (
            <p>{dictionary.header.SearchNothing}</p>
          )}
        </AreaWrapper>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default SearchPage;
