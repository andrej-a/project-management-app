import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global';
import { useAppSelector } from './hooks/hooks';
import { ProtectedRoute } from './utils/routes';
import { swapElements } from './utils/utils';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import CurrentBoardPage from './pages/CurrentBoardPage/CurrentBoardPage';

import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { setColumns, setTasks } from './slices/boardSlice/boardSlice';

function App() {
  const { isAuthorized, theme, columns, tasks } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
      theme: state.application_theme.theme,
      columns: state.board.columns,
      tasks: state.board.tasks,
    };
  });
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    if (result.destination) {
      switch (result.type) {
        case 'column':
          dispatch(
            setColumns(swapElements(columns, result.destination.index, result.source.index))
          );
          break;

        case 'task':
          if (result.source.droppableId === result.destination.droppableId) {
            const columnTasks = [...tasks[result.source.droppableId]];
            dispatch(
              setTasks({
                ...tasks,
                [result.source.droppableId]: swapElements(
                  columnTasks,
                  result.source.index,
                  result.destination.index
                ),
              })
            );
          } else {
            const tasksFromSourceColumn = [...tasks[result.source.droppableId]];
            const tasksFromTargetColumn = [...tasks[result.destination.droppableId]];
            const task = tasksFromSourceColumn[result.source.index];

            tasksFromSourceColumn.splice(result.source.index, 1);
            tasksFromTargetColumn.splice(result.destination.index, 0, task);

            dispatch(
              setTasks({
                ...tasks,
                [result.source.droppableId]: tasksFromSourceColumn,
                [result.destination.droppableId]: tasksFromTargetColumn,
              })
            );
          }
          break;
      }
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
              path="boards"
              element={
                <ProtectedRoute user={isAuthorized} redirectPath="/">
                  <BoardsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="search"
              element={
                <ProtectedRoute user={isAuthorized} redirectPath="/">
                  <SearchPage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="boards" element={<BoardsPage />} />
            <Route path="board" element={<CurrentBoardPage />} />
            <Route path="*" element={<NoResultPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </DragDropContext>
    </>
  );
}

export default App;
