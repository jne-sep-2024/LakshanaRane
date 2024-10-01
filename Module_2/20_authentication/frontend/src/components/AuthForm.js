// import { useState } from "react";
import { Form, Link, useNavigate, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useState } from "react";

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail]=useState("")
  const [Password,setPassword]=useState("")


  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  console.log(email);
  console.log([Password]);

  
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  console.log("isLogin",isLogin);
  const navigte=useNavigate()
  
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required onChange={(e)=>setEmail(e.target.value)} />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
        </p>
        <div className={classes.actions}>
          {/* //query parameter */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button onClick={navigte("/")}>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
