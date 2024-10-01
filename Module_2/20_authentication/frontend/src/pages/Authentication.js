import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams();
  const mode = searchParams.get("mode") || "login";


  console.log("hi",searchParams);
  

  // to handle the mode error
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsuported mode." }, { status: 422 });
  }
  //data object that is returned by formData()
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  
  // /sending a request to my backend-> do this with the fetch func^
  
  const response = await fetch('http://localhost:8080/' + mode, {
    method: "POST",
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(authData)      //to convert data into json format
  });

  console.log("response",response)
  
  
  //is we try to login by invalid credentials->401: unauthuorised user, 422->unprocessed entity
  if(response.status===422 || response.status===401){
    // const responseData=await response.json();
    console.log(authData);
    return response;
  }
  
  if(!response.ok){
    throw json({mesage:'could not authenticate user'},{status:500});
    
  }
    
    //soon: manage the token-> which we will get back from backend
    
    //redirect user to login page
    return redirect('/');

}
