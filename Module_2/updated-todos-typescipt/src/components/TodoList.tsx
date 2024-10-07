import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../features-Slices/todo/todoSlice";
import AddTodo from "./AddTodo";
import { AppDispatch, RootState } from "../app/store";


//telling typescript that this is react- functional component
const TodosList :React.FC = () => {
  const todoList = useSelector((state:RootState) => state.todoApp.todosList);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState< {id:string,text:string}| null>(null);
  
  const dispatch = useDispatch<AppDispatch>();

  const handleEditClick = (todoItem:{id:string,text:string}) => {
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
            <button onClick={() => dispatch(removeTodos(todoItem))}>Delete</button>
          </li>
        )
      })}
    </>
  )
}

export default TodosList;
