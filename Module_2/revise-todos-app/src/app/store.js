import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features-Slices/todo/todoSlice';

export const store = configureStore({

  //same name as app->todoApp name se slice banaya h state ka jisme se reducer access karnge
  //so give that name as key, and they access state.todoApp while using in selector
  reducer:{
    todoApp:todosReducer
  }
});
