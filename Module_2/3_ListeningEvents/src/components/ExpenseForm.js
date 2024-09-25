import React from "react";

import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    // enteredTitle: "",
    // enteredAmount: "",
    // enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //Spread operator ... that pulls up all the old key: value pairs and add it to new oject and
    //then we can still overwrite key value pairs

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };


  const submitHandler=(event)=>{
     event.preventDefault();//this will prevetn form sending the request to server, so the form will be on the same webpage and we can handle the events 

     const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        
    };
    console.log(expenseData);
    props.onSaveExpenseData();

    //deafult values reset kardo pure input fields ke
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
          value={enteredTitle}    //2 way binding 
          onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">+Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
