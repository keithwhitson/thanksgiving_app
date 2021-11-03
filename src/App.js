import React from 'react';
import "./App.css";
import { Recipes } from './Recipes';
import { Hello } from './Hello';
import { bornYear } from './Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Maya" age={26 + 10} />
      <Recipes /> 
    </div>

  );

}

export default App