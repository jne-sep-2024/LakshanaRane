import React from "react";
import { useState } from "react";
const NewTodoForm = ({onSubmit}) => {
//   const add=  props.onSubmit;

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //this is prevent my page from refreshing

    if(newItem==="") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/* htmlFor -> to link label to i/p feild */}
        <input
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
            // console.log(e.target.value)
          }}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
