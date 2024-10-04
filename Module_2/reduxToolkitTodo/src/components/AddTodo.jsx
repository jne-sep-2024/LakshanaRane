import React, { useCallback, useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log("calling")

    //addtodos , removeTodos dispatch k andar hi call honge, and addTodos k andar, (fir action.payload bhejna h)=> this is done by redux internaly
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <>
      <h2>AddTodo</h2>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter a Todo..."
        />
        <button type="submit">+Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
