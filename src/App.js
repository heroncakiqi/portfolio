import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './App.css';

function App() {
  const [state, setState] = useState('');
  const text = `heron cakiqi \n full stack developer`
  useEffect(() => {
    const interval = setInterval(() => {
      const letterToAdd = state.length
      setState(`${state + text[letterToAdd]}`);
    }, 50);
    if(state.length === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [state, text]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{state}<span id="blinker">_</span></h1>
        </div>
      </header>
      <Nav />
    </div>
  );
}

export default App;
