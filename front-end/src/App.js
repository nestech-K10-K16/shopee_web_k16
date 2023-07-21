import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./router/AppRouting";

const App = () => {
  return (
    <div>
      <Router>
        <AppRouting />
      </Router>
    </div>
  );
};

export default App;
