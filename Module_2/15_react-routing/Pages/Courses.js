import React from "react";
import { Outlet ,Link} from "react-router-dom";


const Courses=()=>{
    return(
        <div className="Page">
            <h1>Courses Page..</h1>
            <div className="courses-nav">
                <Link to="/courses/search">Search</Link>
                <Link to="/courses/list">Lists</Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Courses;