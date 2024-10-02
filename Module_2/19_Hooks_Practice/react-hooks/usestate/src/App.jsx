import { memo, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const inc= ()=>{setCount(count+1)};
  // const dec= ()=>{setCount(count-1)};
  console.log("lakshana");

  let s1=setTimeout(() => {
    console.log("hello");

  }, 5000);

  useEffect(() => {
    return () => {
      clearInterval(
        s1,
        console.log("bye")
      );
    };
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>The count is {count}</p>
    </>
  );
}

export default memo(App);
