import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global';
import { useAppSelector } from './hooks/hooks';
import { ProtectedRoute } from './utils/routes';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import { ModalsManager } from './components/ModalsManager/ModalsManager';

import BoardsPage from './pages/BoardsPage/BoardsPage';
import CurrentBoardPage from './pages/CurrentBoardPage/CurrentBoardPage';

import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { onDragEnd } from './utils/onDragEnd';

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

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd(dispatch, tasks, columns)}>
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
          <ModalsManager />
        </ThemeProvider>
      </DragDropContext>
    </>
  );
}

export default App;
