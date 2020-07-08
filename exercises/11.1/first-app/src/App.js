import React from 'react';
import './App.css';

const tasks = ['arrumar a casa', 'jogar bola', 'cuidar do cachorro'];


const task = (value) => {
  return (
    <li>{value}</li>
  );
}
  
const list = tasks.map(element => task(element))
function App() {
  return (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
