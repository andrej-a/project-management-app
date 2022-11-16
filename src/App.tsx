import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import BoardsPage from './pages/BoardsPage/BoardsPage';
import CurrentBoardPage from './pages/CurrentBoardPage/CurrentBoardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="boards" element={<BoardsPage />} />
        <Route path="board" element={<CurrentBoardPage />} />
        <Route path="*" element={<NoResultPage />} />
      </Routes>
    </>
  );
}

export default App;
