import { useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import { useAppSelector } from '../../hooks/hooks';
import { IBoard } from '../../models/IBoard';
import { ITask } from '../../models/ITask';
import BoardSmallCard from '../BoardsPage/BoardSmallCard/BoardSmallCard';
import { BoardsWrapper } from '../BoardsPage/BoardsPage.styled';
import TaskCard from '../CurrentBoardPage/KanbanArea/TaskCard/TaskCard';
import { AreaWrapper, Wrapper } from './SearchPage.styled';

const SearchPage = () => {
  const { dictionary, allBoards } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang,
      allBoards: state.board.boards,
    };
  });

  const [search, setSearch] = useState<string>('');
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isOptionIsBoard, setIsOptionIsBoard] = useState(true);

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
        const searchedTasks = allTasks.filter((board) =>
          board.title.toLowerCase().includes(search.toLowerCase())
        );
        setTasks(searchedTasks);
      }
    }
  }, [search]);

  // useEffect(() => {
  //   const fetchedTasks: [] = [];
  //   allBoards.map((board) =>
  //     // eslint-disable-next-line no-console
  //     getAllTasks(board._id).then((task) => {
  //       [...fetchedTasks, task];
  //     })
  //   );

  // eslint-disable-next-line no-console
  //   console.log(fetchedTasks);
  //   setAllTasks(fetchedTasks.flat());
  // }, []);

  return (
    <Wrapper>
      <Search
        setSearch={(value: string) => setSearch(value)}
        search={search}
        setOption={(value: boolean) => setIsOptionIsBoard(value)}
      />
      <AreaWrapper>
        {boards.length > 0 ? (
          <BoardsWrapper>
            {boards.map((board) => {
              return <BoardSmallCard {...board} key={board._id} />;
            })}
          </BoardsWrapper>
        ) : tasks.length > 0 ? (
          <BoardsWrapper>
            {tasks.map((task, index) => (
              <TaskCard task={task} key={task._id} dragIndex={index} />
            ))}
          </BoardsWrapper>
        ) : (
          <p>{dictionary.header.SearchNothing}</p>
        )}
      </AreaWrapper>
    </Wrapper>
  );
};

export default SearchPage;
