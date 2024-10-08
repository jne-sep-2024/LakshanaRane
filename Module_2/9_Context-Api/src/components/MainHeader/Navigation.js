import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../store/auth-context-api";

const Navigation = (props) => {
  const context= useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {(context)=>{
        return(
          <nav className={classes.nav}>
          <ul>
            {context.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {context.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        )
      }}
     
    </AuthContext.Consumer>
  );
};

export default Navigation;
