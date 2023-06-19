import React from "react";

import { Contact, Home, Navbar, Privacy, Footer } from "./components";
import "./App.css";

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
