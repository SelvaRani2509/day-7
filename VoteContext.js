// src/VoteContext.js
import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export function VoteProvider({ children }) {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
  });

  const addVote = (option) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <VoteContext.Provider value={{ votes, addVote }}>
      {children}
    </VoteContext.Provider>
  );
}
