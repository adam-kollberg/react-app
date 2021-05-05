import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function LoginForm() {


  const initialValue = {
    
    email:"",
    password:"",
  }
  const [login, setLogin] = useState(initialValue);
  const [error, setError]=useState ("");
  const [loggedIn, setloggedIn]=useState(false);
  const [setTokenLocal, setToken]=useState(false);
  


  

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
    const  token  = response.data.jwt;
   localStorage.setItem ('token', token);
   setToken(localStorage.getItem("token"));

    
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);

    setError("Dina inlämningsuppgifter stämmer inte")
  });



}









  return(
      <>

{setTokenLocal ? <div>Tack {login.email} du är inloggad</div> :  
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
    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      LOG IN
    </button>
  
  
  </form>

  <Link to = "register">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      REGISTER
    </Link>
</div>
}
</>
    
  );
  
      }

export default LoginForm;