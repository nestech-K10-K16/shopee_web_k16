import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "styles/index.scss";
import { Provider } from "react-redux";
import reduxStore from "redux/index";
import "configs/icon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
