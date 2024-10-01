import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const inc= ()=>{setCount(count+1)};
  // const dec= ()=>{setCount(count-1)};

  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
      <p>The count is {count}</p>
    </>
  );
}

export default App;
