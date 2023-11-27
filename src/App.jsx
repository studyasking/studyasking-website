import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Study Asking</h1>
      </header>
      
      <main>
        <div className="button-container">
          <button>Asking</button>
          <button>Botón 2</button>
        </div>
      </main>

      <footer>
        <button className="corner-button">social</button>
      </footer>
    </div>
  );
}

export default App;
