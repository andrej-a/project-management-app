import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import { ModalsManager } from './components/ModalsManager/ModalsManager';

import BoardsPage from './pages/BoardsPage/BoardsPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="boards" element={<BoardsPage />} />
        <Route path="*" element={<NoResultPage />} />
      </Routes>
      <ModalsManager />
    </>
  );
}

export default App;
