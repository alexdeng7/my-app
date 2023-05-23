import React from 'react';
import './App.css';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter defaultValue={0}/>
      </header>
    </div>
  );
}

export default App;