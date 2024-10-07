import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTodos } from "../features-Slices/todo/todoSlice";

const AddTodo = () => {
  //hooks
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  
  //helper functions//
  
 const addTodosHandler = (e) => {
     e.preventDefault();
     console.log("adding todo..");
      //pass reducer function in dispatch to send it to store and mutate it//
      dispatch(addTodos(todoInput));
      // {todoInput===''?<p>Please add text</p>:dispatch(addTodos(todoInput))}
      setTodoInput('');
  };

  return (
    <div>
      <h3>AddTodo</h3>
      <form onSubmit={addTodosHandler}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          placeholder="Enter your Todo..."
        />
       
        {/* <button><i class="bi bi-check2-square"></i></button> */}
        {todoInput===''?<button disabled>+Add Todo<i className="bi bi-check2-square"></i></button>:<button type="submit">+Add Todo<i className="bi bi-check2-square"></i></button>}
      </form>
    </div>
  );
};

export default AddTodo;
