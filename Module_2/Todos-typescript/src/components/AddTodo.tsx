import { useDispatch } from "react-redux";
import React, { useState ,useEffect} from "react";
import { AppDispatch } from "../app/store";
import { addTodos,updateTodos } from "../feature-Slice/todos/todoSlice";

interface AddTodosProps{
  isEditing:boolean,
  currentTodo:{id:string,text:string} | null,
  setIsEditing: (isEditing:boolean)=>void,
}

const AddTodo = ({isEditing,currentTodo,setIsEditing}:AddTodosProps) => {
  const [todoInput, setTodoInput] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
   if(isEditing && currentTodo){
    setTodoInput(currentTodo.text);
   }
  }, [isEditing,currentTodo]);
  
  
  
 const addUpdateTodosHandler = (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     if(isEditing && currentTodo){
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
