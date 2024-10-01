import React from "react"
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Home page</h1>
            <p>Go to <Link to="/products">List of Products </Link></p>
        </div>
    )
};

export default Home;