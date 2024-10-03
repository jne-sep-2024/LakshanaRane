// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses.js";
function App() {



  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2024, 10, 23),
    },
    {
      id: "e2",
      title: "Lays Wafers",
      price: 30.0,
      date: new Date(2024, 1, 20),
    },
    {
      id: "e3",
      title: "Amul cheese",
      price: 50.09,
      date: new Date(2024, 5, 13),
    },
  ];
  return (
    <div>
      <h2>Let's Get started</h2>
     <Expenses items={expenses}/>
     
     
    </div>
  );
}

export default App;

//this is app.js
