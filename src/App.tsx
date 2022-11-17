import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useAppSelector } from './hooks/hooks';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { ProtectedRoute } from './utils/routes';

function App() {
  const { isAuthorized } = useAppSelector((state) => {
    return {
      isAuthorized: state.user.isAuthorized,
    };
  });
  return (
    <>
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
    </>
  );
}

export default App;
