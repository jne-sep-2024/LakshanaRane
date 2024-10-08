import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  const data = {
    name: "lakshh",
    id: 562,
    team: "jne dev",
  };
  const arrayOfObjects = [
    {
      name: "john",
      empId: 101,
    },
    {
      name: "Mathew",
      empId: 102,
    },
    {
      name: "jane",
      empId: 103,
    },
    {
      name: "Daniel",
      empId: 104,
    },
  ];

//   const navigationHandler = () => {
//     console.log("navigating ...");
//     navigate("/page2", { state: { message: "hello from page 1" } });
//   };

  const handleNavigate = () => {
    navigate("/page2", {
      state: {
        objectFromPage1: data,
        arrayOfObjectsFromPage1: arrayOfObjects,
      },
    });
  };

  return (
    <div>
      <h3>Page-1</h3>
      <p>Hello this is page 1</p>
      {/* <button onClick={navigationHandler}>Navigate to Page 2</button> */}

      <button onClick={handleNavigate}>Send object/arrayofobjects</button>
    </div>
  );
};

export default Page1;
