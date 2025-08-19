// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { VoteProvider } from "./VoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <VoteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VoteProvider>
);
