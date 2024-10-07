import React from 'react';
import './App.css'
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';

function App() {

  return (
    <>
    <h1>React-Redux</h1>
     <h3>Todos App </h3>
        <AddTodo/>
        <TodosList/>
    </>
  )
}

export default App
