import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  //on every render navbar thinks ki ye changed fucntion hai  (js concept)//
  //so to tell react ki ye ek hi fucntion h har reredner pr, useCallback() se batana padega

  /*const getAdjective=()=>{
    return "another"
  }*/


    // useCallback freezes a fucntion , s that after every rendering, it stays same for react
  const getAdjective = useCallback(() => {
    return "another" + count;
  }, [count]);

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
