import React from "react";
import ReactCard from "./ResultCard";
import Img from "./logo.svg";

function Result(props) {
    const { candidates } = props;
    return (
      <div className="result">
        <h2>Result</h2>
        {/* {candidates.map((candidate) => ( */}
          <ReactCard
            key="1"
            // {candidate.id}"1"
            name="Ashish"
            // {candidate.name}
            votes="12"
            // {candidate.votes}
            partySymbol={Img}
            // {candidate.partySymbol}
            partyName="Nepali Congress"
            // {candidate.partyName}
          />
          <ReactCard
            key="1"
            // {candidate.id}"1"
            name="Dhami "
            // {candidate.name}
            votes="12"
            // {candidate.votes}
            partySymbol={Img}
            // {candidate.partySymbol}
            partyName="UML"
            // {candidate.partyName}
          />
        {/* ))} */}
      </div>
    );
  }

export default Result;

