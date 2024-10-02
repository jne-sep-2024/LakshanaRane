import React from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const state={
        "name":"Lakshana",
        "class" :"Btech-2 CSE"
    }
  return (
    <noteContext.Provider value={state}>
        {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;