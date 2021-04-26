import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({props}) {
  const [details, setDetails] = useState({ email: "", password: "" });
  console.log(details)
  const submitHandler = (e) => {
    e.preventDefault();
    props(details); // call the function and pass the prop/details
  
  }

  const changeHandler = ({target}) => {
    const {name, value} = target;
    setDetails({
      ...details,
      [name]: value
    });
  }

  return (
      <>
    <div className="login-box">
  <h2>Login</h2>
  <form onSubmit={submitHandler}>
    <div className="user-box">
      <input type="text" name="email" required="" onChange={changeHandler}  />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" required="" onChange={changeHandler} />
      <label>Password</label>
    </div>
    <button >
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
</>
    
  );
}

export default LoginForm;