import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Contact, Home, Privacy } from './pages';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
