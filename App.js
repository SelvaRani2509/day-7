// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VotingPage from "./VotingPage";
import ResultsPage from "./ResultsPage";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Simple Voting App</h1>
      <nav>
        <Link to="/" style={{ margin: "10px" }}>
          Vote
        </Link>
        <Link to="/results" style={{ margin: "10px" }}>
          Results
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
