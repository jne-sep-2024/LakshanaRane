import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js';

export const store= configureStore({

    reducer:
        todoReducer
    
});

//I am store, I am restrictive store, only those reducers which are registered within me, i will 
//only take values from those reducers and upadte them