import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./router/Approuting";
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
