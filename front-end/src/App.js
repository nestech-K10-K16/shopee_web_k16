import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./router/appRouting";

const App = () => {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
