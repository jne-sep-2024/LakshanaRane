import React from "react";
import './AddUser.css';
import Card from "./Card";


const AddUser =(props)=>{


const addUserHandler=(event)=>{
    event.preventDefault();

};
    return(
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type="submit">+ Add user</button>
        </form>
        </Card>
    )
};

export default AddUser;