import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="boards" element={<BoardsPage />} />
        <Route path="*" element={<NoResultPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
