import { useDispatch } from "react-redux";
import React, { useState ,useEffect, memo} from "react";
import { addTodos,updateTodos } from "../features-Slices/todo/todoSlice";


//if nor working,, try sending whole todo ietm instead of only txt 
const AddTodo = ({isEditing,currentTodo,setIsEditing}) => {
  //hooks
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
   if(isEditing && currentTodo){
    setTodoInput(currentTodo.text);
   }
  }, [isEditing,currentTodo]);
  
  
  //helper functions//
  
 const addUpdateTodosHandler = (e) => {
     e.preventDefault();
     if(isEditing){
      console.log("updating todo..");
       //pass reducer function in dispatch to send it to store and mutate it//
       dispatch(updateTodos({id:currentTodo.id,text:todoInput}));
       setIsEditing(false);
      }else{
        console.log("adding todo..");
        //pass reducer function in dispatch to send it to store and mutate it//
       dispatch(addTodos(todoInput));

     }
      setTodoInput("");
  };

  return (
    <div>
      {isEditing? "Update Todo" : "+Add Todo"}
      <form onSubmit={addUpdateTodosHandler}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          placeholder="Enter your Todo..."
        />
       <button type="submit">{isEditing ? "Update Todo" : "+Add Todo"}</button>
       
           </form>
    </div>
  );
};

export default AddTodo;
