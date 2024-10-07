import { createSlice,nanoid} from '@reduxjs/toolkit';
import { act } from 'react';



const initialState = {
   todosList: [{ id: 101, text: "Learn react-redux" }]
   };

export const todoSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todoObject = {
        id: nanoid(),
        text: action.payload,
      };
      console.log("add todo: ",todoObject);
      state.todosList.push(todoObject);
      // console.log("reducer-initialState: ",initialState);
    },
    removeTodos: (state, action) => {
      state.todosList = state.todosList.filter((todoItem) => {
        // this will check for every todoItem in the Todos List
        return todoItem.id !== action.payload;
      });
    },

      updateTodos: (state, action) => {
        console.log("updating todosList");
       
        const newTodo=action.payload;
        state.todosList.find((todoItem)=>{
          if(todoItem.id===action.payload){
            todoItem.text=newTodo;
            
          }
        })
      },
  },
});

export const { addTodos, removeTodos ,updateTodos} = todoSlice.actions;
export default todoSlice.reducer;
