import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";


function App() {
 
/*IMMP: you can't put hooks inside conditions, loops, they should be at the top of all functions
so the format should be:
1)hooks
2) HELPER fucntions or code that will be having some parsing of data
3)return statement
*/


  // const [todos, setTodos] = useState([]);
  const [todos,setTodos]=useState(()=>{
    const localValue=localStorage.getItem('ITEM');
    if(localValue==null) return [];       //return empty array if nothing is present in LS
    return JSON.parse(localValue);
  });          //this fucntion will pull the data from browsers localstorage(5-10mb max)


  useEffect(()=>{
    localStorage.setItem("ITEM",JSON.stringify(todos));   //we want to set Th ITEM property to json strigified version of our todos

  },[todos]);     //every time when the state "todos " is changed we want to run this 
 function addTodo(title){
  setTodos((currentTodos) => {
      return [
        ...currentTodos, //...todos-> will ovew rite the empty initial state to mainatin the old data and add up new items-> use another variable
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
 }

  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
      return (currentTodos.map(todo=>{
        if(todo.id===id){
          // todo.completed=completed
          return {...todo, completed};
        }
        return todo;      //if id is not matching return todo object as it is
      }))
    })
  }

  function deleteTodos(id){
    setTodos((currentTodos=>{
      return currentTodos.filter( todo=>{todo.id !== id});
    }))
  }
  console.log(todos);

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">ToDo's List</h1>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodos}/>       {/* passing the todos state to the child component TodoList */}
    </>
  );
}

export default App;
