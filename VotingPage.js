// src/VotingPage.js
import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

function VotingPage() {
  const { votes, addVote } = useContext(VoteContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Vote for Your Favorite</h2>
      {Object.keys(votes).map((option) => (
        <button
          key={option}
          onClick={() => addVote(option)}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default VotingPage;
