import React from 'react';
import './App.css';
import Header from './elements/Header';
import Window from './elements/Window';

function App() {
  const headerElements = ["element1", "element2", "element3"]

  return (
    <div className="App">
      {/* <div className="star"></div> */}
      {/* -<Header items={headerElements} /> */}
      <Window />
      <Window />
    </div>
  );
}

export default App;
