  import { useState } from "react";
  import "./App.css";

  function App() {
    const [property, setProperty] = useState({
      name: "lakshh",
      emp_no: 562,
    });
    const [arrayState, setArrayState] = useState(["thar", "jaguar", "MG"]);

    const [object, setobject] = useState({
      firtsName: "john",
      lastName: "Doe",
      jobs: ["amazon", "google", "meta"],
    });


    const operations=['addition',"subtration","multiply","division"];  
    
    // destructuring
    const person = { name: 'John', age: 25, city: 'New York' };
    const { name, ...details } = person;
    
    const addHandler2 = () => {
      setArrayState([...arrayState, "Mercedes"]);
      // console.log("array:",arrayState);
    };

    const addHandler = () => {
      setProperty({ ...property, lastName: "rane" });
      console.log("adding property");
      // console.log(property)
    };

    const mutateObject = () => {
      const {jobs}=object;
      setobject({ 
        ...object,
      jobs:["apple",...jobs.slice(1,jobs.length)]})
    };

    const opHandler=()=>{
      const newOperations=[...operations,"modulus"];
      console.log(newOperations)
    }
    //spread operator in fucntion 
    function sum(a, b, c) {
      return a + b + c;
    }
    
    const numbers = [1, 2, 3];
    const result = sum(...numbers); 


    return (
      <div className="App">
        {console.log("details:", property)}
        <button onClick={addHandler}>+Add property</button>

        {console.log("arrayState:", arrayState)}
        <button onClick={addHandler2}>+Add element in array</button>

        {console.log("OBJECT:", object)}
        <button onClick={mutateObject}>+edit object</button>
        
        {console.log("Operations:",operations)}
        <button onClick={opHandler}>newoperation</button>
        

      </div>
    );
  }

  export default App;

  // name: 'John', details: { age: 25, city: 'New York' }
