import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import "./styles/app.css";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
