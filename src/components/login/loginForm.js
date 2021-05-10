import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';


function LoginForm() {


  const initialValue = {
    
    email:"",
    password:"",
  }
  const [login, setLogin] = useState(initialValue);
  const [error, setError]=useState ("");
  const [getToken, setToken]=useState("");
  const history = useHistory();
  
  useEffect (()=>{
    const Token = localStorage.getItem("token");
    setToken(Token);
   
   
   
   
     }, [])
  

function changeHandler(e){

  setLogin ({
    ...login, 
    [e.target.name]: e.target.value});
    console.log(login);

}

function submitHandler (e) {
  e.preventDefault();
  axios.post('http://localhost:1337/auth/local', {
    identifier: login.email,
    password: login.password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    const token = localStorage.setItem("token", response.data.jwt);
    history.push("/");
    history.go(0);
    

   

    
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);

    setError("Dina inlämningsuppgifter stämmer inte")
  });
  
  


}







  return(
      <>

{getToken ? <div>Tack {login.email} du är inloggad</div> :  
<div className="login-box">
  <h2>Login</h2>
  <form onSubmit={submitHandler}>
    <div className="user-box">
      <input type="text" value ={login.email} name="email" required="" onChange={changeHandler}  />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" value ={login.password} name="password" required="" onChange={changeHandler} />
      <label>Password</label>
    </div>
    <h1>{error}</h1>
    <button class="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Login</button>
  
  
  </form>

  <Link to = "/register">
  <button class="uppercase mt-8 mx-auto shadow bg-black hover:bg-black-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Register</button>
    </Link>

    <Link to = "/forgot-password">forgot</Link>
</div>
}
</>
    
  );
  
      }

export default LoginForm;