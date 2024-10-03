import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // // USING PROMISES //
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data);
  //       setMyData(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //       setIsError(err.message);
  //     });
  // }, []);

  
  //USING AYNC AWAIT

  useEffect(()=>{
    const apiGetData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts "
        );
        setMyData(res.data);
        setIsError(err.message);
      } catch (err) {
        console.log(err.message);
        setIsError(err.message);
      }
    };

    apiGetData();
  },[])

  return (
    <>
      <h1> Axios Requests</h1>
      {isError&&  <p>{isError}</p>}
      <div className="grid">
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0,100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
