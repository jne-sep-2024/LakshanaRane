import React from 'react'

const TodoItem = ({id, title, completed,toggleTodo,deleteTodo }) => {
  return (
    <li>
    <label>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button
      onClick={() => deleteTodo(id)} // to directly call the fucntion and pass id to delete
      className="btn btn-danger"
    >
      Delete
    </button>
  </li>
  )
}

export default TodoItem