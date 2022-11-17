import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global';
import { useAppSelector } from './hooks/hooks';
import { ProtectedRoute } from './utils/routes';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  const { isAuthorized, theme } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
      theme: state.application_theme.theme,
    };
  });

  return (
    <>
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
          <Route path="*" element={<NoResultPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
