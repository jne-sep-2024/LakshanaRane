import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inc_counter, setInc_counter]= useState(0);
  const [dec_counter, setDec_counter]= useState(0);

const onClickHandler1= ()=>{

  let count;
  setInc_counter(count++);
  console.log(count)
}
const onClickHandler2= ()=>{

  dec_counter--;
  setDec_counter(dec_counter);
  console.log(dec_counter)
}

  return (
    <div className="App">
      <button onClick={onClickHandler1}>Increement</button>
      <p>Counter:C{inc_counter}</p>
      <button onClick={onClickHandler2}>Decreement</button>
      <p>Counter: {dec_counter}</p>
    </div>
  );
}

export default App;
