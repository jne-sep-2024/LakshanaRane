import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
// import './Todos.css';

const Todos = () => {
  const todos = useSelector(state => state.todos); //state k andar jo pura store h waha se koi bhi value aap nikal sakte h
  const dispatch = useDispatch();

  console.log("todos",todos);
  

  return (
    <>
      <div>
        <h2>Todos List</h2>
      </div>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
    </>
  );
};

export default Todos;
