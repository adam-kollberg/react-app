import React, { useState } from "react";

import axios from 'axios';


function SendPassword() { 

    const initialValue = {
    
        password:"",
        
      }

const [sendPassword, setPassword] = useState(initialValue);

function changeHandler(e){

    setPassword ({
      ...sendPassword, 
      [e.target.name]: e.target.value});
      console.log(sendPassword);
  
  }
    

    function submitHandler () {
    axios
      .post('http://localhost:1337/auth/reset-password', {
        code: 'privateCode', // code contained in the reset link of step 3.
        password: sendPassword.password,
        passwordConfirmation: sendPassword.verifypassword,
      })
      .then(response => {
        console.log("Your user's password has been reset.");
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
    }



return (
<>

<div className="login-box">
<form onSubmit={submitHandler}>

    <div className="user-box">
      <input type="password" value ={sendPassword.password} name="password" required="" onChange={changeHandler}  />
      <label>Type in your new password</label>
    </div>

    <div className="user-box">
      <input type="password" value ={sendPassword.verifypassword} name="verifypassword" required="" onChange={changeHandler}  />
      <label>Verify your new password</label>
    </div>

    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     Reset password
    </button>

</form>
</div>
</>

)


}

export default SendPassword;