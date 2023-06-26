import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./router/index";

const App = () => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
};

export default App;
