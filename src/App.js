import React from 'react';
import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <h1 className="heading">DanFlix Movie List Generator</h1>
          <h3>A digital movie list generator that generates random movies from my database, and also allows users to initiate this on their own.</h3>
        </header>
        <div>
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;
