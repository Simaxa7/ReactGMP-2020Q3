import React from 'react';
import sum from './sum';
import './app.css';

function App() {
  return (
    <div className="app">
      <h1>Hello React</h1>
      <p>Magic is happend</p>
      <p className="small-text">{`The test number ${sum(16, 0.13)}`}</p>
    </div>
  );
}

export default App;
