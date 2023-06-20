import React from "react";

import { Footer, Navbar } from "./components";
import { Home, Contact, Privacy } from "./pages";

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
