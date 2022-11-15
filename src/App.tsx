import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
import { ModalsManager } from './components/ModalsManager/ModalsManager';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NoResultPage />} />
      </Routes>
      <ModalsManager />
    </>
  );
}

export default App;
