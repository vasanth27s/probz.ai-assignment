import React from 'react';
import Chart from './components/Chart';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Charting Library</h1>
        <Chart />
      </header>
    </div>
  );
};

export default App;
