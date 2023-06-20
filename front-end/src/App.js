import React from 'react';

import { Contact, Footer, Navbar, Privacy } from './components';
import Home from './pages/home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
