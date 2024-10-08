import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../features-Slices/todo/todoSlice";
import AddTodo from "./AddTodo";

const TodosList = () => {
  const todoList = useSelector((state) => state.todoApp.todosList);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState('');
  
  const dispatch = useDispatch();

  const handleEditClick = (todoItem) => {
    setCurrentTodo(todoItem); 
    setIsEditing(true); // Set to true when you click edit
  }

  return (
    <>
      <AddTodo
        isEditing={isEditing}
        currentTodo={currentTodo}
        setIsEditing={setIsEditing}
      />

      <h3>TodosList</h3>
      {todoList && todoList.map((todoItem) => {
        return (
          <li key={todoItem.id}>
            {todoItem.text}
            <button onClick={() => handleEditClick(todoItem)}>Update</button>
            <button onClick={() => dispatch(removeTodos(todoItem.id))}>Delete</button>
          </li>
        )
      })}
    </>
  )
}

export default TodosList;
