import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./router/Approuting";

const App = () => {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
