import React from "react";
import { Footer, Navbar } from "./components";
import { Home, Contact, Privacy } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Privacy />
      <Footer />
      <Contact />
    </div>
  );
};

export default App;
