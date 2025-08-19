// src/ResultsPage.js
import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

function ResultsPage() {
  const { votes } = useContext(VoteContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Voting Results</h2>
      {Object.keys(votes).map((option) => (
        <p key={option}>
          {option}: {votes[option]} votes
        </p>
      ))}
    </div>
  );
}

export default ResultsPage;
