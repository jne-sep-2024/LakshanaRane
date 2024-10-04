import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos,updateTodos } from "../features-Slices/todo/todoSlice";

const TodosList = () => {
  const todoList = useSelector((state) => state.todoApp.todosList);
  const dispatch=useDispatch();

  console.log(todoList);

  
  return(

    <>
    <h3>TodosList</h3>
    {todoList&& todoList.map((todoItem)=>{
      return(
        <li key={todoItem.id}>
          {todoItem.text}
          
          <button onClick={()=>{dispatch(updateTodos(todoItem.text))}}>Update</button>
          <button onClick={()=>{dispatch(removeTodos(todoItem.id))}}>Delete</button>
        </li>
      )
    })}
    </>
  )




}

export default TodosList;
