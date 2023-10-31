
import React, { useState } from 'react';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
import Results from './components/Results/Results';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState('home');
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setGameState('question');
    setScore(0);
  };

  const endQuiz = () => {
    setGameState('results');
  };

  const handlePlayAgain = () => {
    setGameState('question');
    setScore(0);
  };

  return (
    <div className="app">
      {gameState === 'home' && <Home onStartQuiz={startQuiz} />}
      {gameState === 'question' && <Question score={score} endQuiz={endQuiz} totalQuestions={10} setScore={setScore} />}
      {gameState === 'results' && <Results score={score} onPlayAgain={handlePlayAgain} />}
    </div>
  );
};

export default App;
