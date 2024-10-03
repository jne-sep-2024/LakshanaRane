import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};


export const todoSlice = createSlice({
  name: "todo",
  initialState,

  //reducers:using these you can mutate state
  //in the reducers methods->you will always have access to the current state instance and actions
  
  reducers: {
    addTodo: (state, action) => {
      //array m objecst push karne h
      console.log("in redux",action.payload)
      const todo = {
        id: nanoid(), //to generate random unique id
        text: action.payload, //you can take the text value from action->payload
      };

      console.log("my",todo)

      state.todos.push(todo); //humare "todos" array m humne "todo" ka ek object push kardiya
      console.log("state.todos",state.todos);
      
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        console.log("hiii",action.payload)
        return todo.id !== action.payload;
      });
    },

  
   
  },
});


export const{addTodo,removeTodo}=todoSlice.actions; 

export default todoSlice.reducer;