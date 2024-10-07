import { createSlice,nanoid,PayloadAction} from '@reduxjs/toolkit';


interface Todo{
  id:string;
  text:string;
}

interface TodoState{
  // todosList:todo[];?? error
  todosList:Todo[];
}
const initialState : TodoState = {
   todosList: [{ id: '101', text: "Learn react-redux" }]
   };

export const todoSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    addTodos: (state, action:PayloadAction<string>) => {
      const todoObject = {
        id: nanoid(),
        text: action.payload,
      };

      console.log("add todo: ",todoObject);
      state.todosList.push(todoObject);
    },

    removeTodos: (state, action:PayloadAction<{id:string,text:string}>) => {
      state.todosList = state.todosList.filter((todoItem) => {
        
        // this will check for every todoItem in the Todos List
        return todoItem.id !== action.payload.id;// now its giving error while not givin ".id"!
      });
    },

      updateTodos: (state, action:PayloadAction<{id:string,text:string}>) => {
        console.log("Updating todo....");
        //we are destructuring the data from the incoming object inside action.payload
        const {id, text}=action.payload;

        //first find the todo with id is found or not;and take that object into a variable
        const todoItemToUpdate = state.todosList.find(
          (todoItemFound) => todoItemFound.id === id
        );
        
        if(todoItemToUpdate){
          todoItemToUpdate.text=text;
        }
        
      }
       
      
  },
});

export const { addTodos, removeTodos ,updateTodos} = todoSlice.actions;
export default todoSlice.reducer;
