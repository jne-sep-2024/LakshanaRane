import React from 'react';
import { memo } from 'react';

const Navbar = ({adjective, getAdjective}) => {
    console.log("navbar is rendered");
  return (
    <>
    <div>I am an {adjective} navbar</div>
    <button onClick={()=>{getAdjective()}}>Change me</button>
    </>
  )
}


// memo->jab jab sirf props change honge tabhi navbar re-render hoga, even if app.js is re-rendering
export default memo(Navbar);