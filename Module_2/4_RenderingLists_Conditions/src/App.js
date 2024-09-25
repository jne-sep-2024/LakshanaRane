// import logo from "./logo.svg";
import React,{useState} from "react";
import "./App.css";

import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense.js";


const DUMMY_EXPENSES = [
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
  
  const  App=()=> {
    const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
   
  const addExpenseHandler=expense=>{
    console.log('in app.js');
    console.log(expense);
    setExpenses((prevExpenses)=>{return ([expenses,...prevExpenses])})
  }

  return (
    <div>
      {/* <h2>Let's Get started</h2> */}
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;

//this is app.js
