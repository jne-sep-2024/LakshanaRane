import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(  enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpenseHandler();
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;