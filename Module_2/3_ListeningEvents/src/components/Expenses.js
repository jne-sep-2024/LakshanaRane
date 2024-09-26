import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHandler = selectedYear=>{
        setFilteredYear(selectedYear);
    }
    return(
        <div>

        <Card className="expenses">

            <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChnageHandler}
            />
            
            <ExpenseItem
            title={props.items[0].title}
            price={props.items[0].price}
            date={props.items[0].date}
            />
            <ExpenseItem
            title={props.items[1].title}
            price={props.items[1].price}
            date={props.items[1].date}
            />
            <ExpenseItem
            title={props.items[2].title}
            price={props.items[2].price}
            date={props.items[2].date}
            />

        </Card>
        </div>
    )
};

export default Expenses;