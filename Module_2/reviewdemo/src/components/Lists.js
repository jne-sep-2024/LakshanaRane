import React, { useState } from "react";

const Lists = () => {
    // const [filteredCars, setFilteredCars] = useState([]);
  const [input, setInput] = useState("");


//   const cars = [
    //     { brand: "MG", id: 1 },
    //     { brand: "Thar", id: 2 },
    //     { brand: "Mercedes", id: 3 },
    //     { brand: "Jaguar", id: 4 },
    //   ];
    
    
    
    const [array, setArray]=useState([
      "orange","mango","apple","grapes"
    ]);
    [...array,"djwkba"]

    // const searchHandler=()=>{
    //     const filterdArray=array.filter(fruit=>array.includes(input))
    //     setfiltereArray(filteredArray);
    // }

  return (
    <div>
      <h4>Lists</h4>
      <label>Input </label>
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter here..."
      />
      {/* <button onClick={searchHandler}>Search</button> */}

    {/* {<ul>
            {cars.map((item)=>(
                <li key={item.id}>
                    brand:{item.brand}
                    id:{item.id}
                </li>
            ))}
        </ul>} */}
      {/* {filteredCars.length > 0 ? (
        <ul>
          {filteredCars.map((item) => (
            <li key={item.id}>
              Brand: {item.brand}, Id: {item.id}
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty array</p>
      )} */}

      <h1> Fruits</h1>
      {array.map((item,index)=>(
        <li key={index}>
            {item}
        </li>
      ))}
      {/* <button >search</button> */}
    </div>
  );
};

export default Lists;

















//   const searchHandler = () => {
//     const newFilteredCars = cars.filter(car => car.brand.includes(input));
//     setFilteredCars(newFilteredCars); 
//   };
