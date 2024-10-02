import React, { useEffect } from "react";


const Navbar= ({color})=>{

    useEffect(()=>{
        alert('hey,I will run on every render');
    })

    useEffect(()=>{
        alert('I will run on first moutning of component');
    },[])

    useEffect(()=>{
        alert('I will run when the color will change');
    },[color])

    //example of cleanup fucntion
    useEffect(() => {
        alert("hey welcome to the page, this is first render of app.js")
      
        return () => {
          alert('component was unmounted')
        }
      }, []);
      

    return(
        <div>
           I am Navbar of {color} color hehe..
        </div>
    )

};
export default Navbar;