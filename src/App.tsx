import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
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
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { DragDropContext } from 'react-beautiful-dnd';
import { onDragEnd } from './utils/onDragEnd';
import { langEnum, localStorageEnum, themeEnum } from './constants/localStorage';
import { updateTheme } from './utils/updateTheme';
import { getAllUsersThunk } from './slices/userSlice/userSlice';
import { updateLang } from './utils/updateLang';
import { localData } from './constants/applicationConstants';

function App() {
  const { isAuthorized, theme, columns, tasks, boardOwner, boardUsers, userId } = useAppSelector(
    (state) => {
      return {
        isAuthorized: state.user.isAuthorized,
        theme: state.application_theme.theme,
        boardOwner: state.board.currentBoard?.owner ?? '',
        boardUsers: state.board.currentBoard?.users ?? [],
        userId: state.user.id ?? '',
        columns: state.column.columns,
        tasks: state.task.tasks,
      };
    }
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    isAuthorized && dispatch(getAllUsersThunk());
    switch (localStorage.getItem(localStorageEnum.THEME)) {
      case themeEnum.DARK:
        updateTheme(dispatch, themeEnum.DARK);
        break;
      default:
        updateTheme(dispatch, themeEnum.DEFAULT);
        break;
    }
    switch (localStorage.getItem(localStorageEnum.LANG)) {
      case langEnum.RU:
        updateLang(dispatch, langEnum.RU);
        break;
      default:
        updateLang(dispatch, langEnum.EN);
        break;
    }
  }, []);

  const checkProps = () => {
    if (
      !boardOwner ||
      (boardOwner &&
        boardUsers &&
        (localStorage.getItem(localData[0]) === boardOwner ||
          boardUsers.includes(localStorage.getItem(localData[0])!)))
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd(dispatch, tasks, columns)}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
              path="signIn"
              element={
                <ProtectedRoute user={!isAuthorized} redirectPath="/boards">
                  <SignIn />
                </ProtectedRoute>
              }
            />
            <Route
              path="signUp"
              element={
                <ProtectedRoute user={!isAuthorized} redirectPath="/boards">
                  <SignUp />
                </ProtectedRoute>
              }
            />
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
            <Route
              path="board/:boardId"
              element={
                <ProtectedRoute user={isAuthorized && checkProps()} redirectPath="/">
                  <CurrentBoardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute user={isAuthorized} redirectPath="/">
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<MainPage />} />
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
