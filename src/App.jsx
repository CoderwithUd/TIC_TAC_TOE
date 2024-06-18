import React from 'react';
import './App.css';
import Game from './component/Game';

const App = () => {
  return (
    <div className="App">
      <h1>TIC_TAC_TOE 2D Games</h1>
      <div className="container">
      <Game></Game>
      </div>
    </div>
   
  );
};

export default App;
