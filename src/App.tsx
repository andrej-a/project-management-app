import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
/* COMPONENTS */
import { NoResultPage } from './pages/404/NoResultPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NoResultPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
