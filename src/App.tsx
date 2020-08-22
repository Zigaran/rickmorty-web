import React from 'react';
import './App.css';
import { Home } from './screens';
import { Filter } from './components';

function App() {
  return (
    <div className="App">
      <Filter />
      <Home />
    </div>
  );
}

export default App;
