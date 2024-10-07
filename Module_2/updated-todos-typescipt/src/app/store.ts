import {configureStore} from '@reduxjs/toolkit'
import todosReducer from '../features-Slice/todos/todoSlice'
export const store = configureStore({

  //same name as app->todoApp name se slice banaya h state ka jisme se reducer access karnge
  //so give that name as key, and they access state.todoApp while using in selector
  reducer:{
    todoApp:todosReducer
  }
});


//rootstate:this defines the structure of state which is in your redux-store
//AppDispatch:->Ye type Redux store ke dispatch function ka type define karta hai
//store.dispatch->Redux ka wo function hai jisse hum actions ko dispatch karte hain (yaani, actions ko store me bhejte hain).

//reason to use: types safety!

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;