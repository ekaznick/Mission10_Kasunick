import React from 'react';
import './App.css';
import Header from './Header';
import PlayerInfo from './Bowlers/PlayerInfo';

function App() {
  return (
    <div className="App">
      <Header title="Bowler Info for the Marlins and Sharks" />
      <PlayerInfo />
    </div>
  );
}

export default App;
