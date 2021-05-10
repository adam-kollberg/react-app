import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';


function RegisterForm() {

  const initialValue = {
    username: "",
    email:"",
    password:"",
  }

  const[user, setUser] = useState(initialValue);
  const history = useHistory();

function onSubmit(e){
e.preventDefault();
axios.post('http://localhost:1337/auth/local/register', {
      username: user.username,
      email: user.email,
      password: user.password,
    })
  .then (response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);

    history.push("/login");


  })

  

  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);

    
  });
 
}


function onChange(e) {
  
setUser({
  ...user,
  
  [e.target.name]: e.target.value});
  console.log(user);
}





return (
      <>
    <div className="login-box">
  <h2>REGISTER</h2>
  <form onSubmit={onSubmit}>
  <div className="user-box">
      <input type="text" name="username" value={user.username} required="" onChange={onChange}  />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="email" value={user.email} required="" onChange={onChange}  />
      <label>Email</label>
    </div>
    
   <div className="user-box">
      <input type="password" name="password" value={user.password} required="" onChange={onChange}  />
      <label>Password</label>
    </div>
    <button class="uppercase mt-8 mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Register</button>
  
  
  </form>
</div>
</>
    
  );
}

export default RegisterForm;