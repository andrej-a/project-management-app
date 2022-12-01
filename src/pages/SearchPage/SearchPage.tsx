import { useEffect, useState } from 'react';

import { Search } from '../../components/Search/Search';
import BoardSmallCard from '../BoardsPage/BoardSmallCard/BoardSmallCard';
import { SearchTaskCard } from './SearchTask';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { IBoard } from '../../models/IBoard';
import { ITask } from '../../models/ITask';

import { fetchAllBoards } from '../../slices/boardSlice/actions';
import { fetchAllUserTasks } from '../../slices/taskSlice/actions';

import { BoardsWrapper } from '../BoardsPage/BoardsPage.styled';
import { AreaWrapper, Wrapper } from './SearchPage.styled';
import { priorityKey } from '../../constants/priorityKey';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const SearchPage = () => {
  const { dictionary, allBoards, allUserTasks, isLoadingBoards } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang,
      allBoards: state.board.boards,
      allUserTasks: state.task.allUserTasks,
      isLoadingBoards: state.board.isLoading,
    };
  });

  const [search, setSearch] = useState<string>('');
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isOptionIsBoard, setIsOptionIsBoard] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search === '') {
      setBoards([]);
      setTasks([]);
    } else {
      if (isOptionIsBoard) {
        setTasks([]);
        const searchedBoards = allBoards.filter((board) =>
          board.title.toLowerCase().includes(search.toLowerCase())
        );
        setBoards(searchedBoards);
      } else {
        setBoards([]);
        const searchedTasks = allUserTasks.filter((task) =>
          task.title.split(priorityKey)[0].toLowerCase().includes(search.toLowerCase())
        );
        setTasks(searchedTasks);
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
          {boards.length > 0 ? (
            <BoardsWrapper>
              {boards.map((board) => {
                return <BoardSmallCard {...board} key={board._id} />;
              })}
            </BoardsWrapper>
          ) : tasks.length > 0 ? (
            <BoardsWrapper>
              {tasks.map((task) => (
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
