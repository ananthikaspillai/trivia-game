
import React from 'react';
import './Results.css';

const Results = ({ score, onPlayAgain }) => {
  const handlePlayAgain = () => {
    onPlayAgain();
  };

  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <p>Score: {score}/10</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Results;



