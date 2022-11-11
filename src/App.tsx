import React from 'react';
import { Route, Routes } from 'react-router-dom';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NoResultPage />} />
      </Routes>
    </>
  );
}

export default App;
