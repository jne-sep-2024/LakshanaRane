import React from "react";
import { useLocation } from "react-router-dom";

function Page2() {
  const location = useLocation();
  console.log("location",location);
  
  const { objectFromPage1,arrayOfObjectsFromPage1 } = location.state || {};
  // const {arrayOfObjectsFromPage1}=location.state
    console.log(objectFromPage1.name, objectFromPage1.id,objectFromPage1.team);
    console.log(arrayOfObjectsFromPage1);
    
  return (
    <div>
      <h1>Page 2</h1>
      <p>Name: {objectFromPage1.name}</p>
      <p>Id: {objectFromPage1.id}</p>
      <p>team: {objectFromPage1.team}</p>

      <p>Array of objects:</p>
      {arrayOfObjectsFromPage1.length>0?(arrayOfObjectsFromPage1.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Id: {item.id}</p>
          </div>
        ))):<p>Empty array</p>}
    </div>
  );
}

export default Page2;
