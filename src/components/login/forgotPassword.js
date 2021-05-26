import React, { useState } from "react";

import axios from "axios";

function ResetPassword() {
  const initialValue = {
    email: "",
  };

  const [resetPassword, setReset] = useState(initialValue);

  function changeHandler(e) {
    setReset({
      ...resetPassword,
      [e.target.name]: e.target.value,
    });
    console.log(resetPassword);
  }

  function submitHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:1337/auth/forgot-password", {
        email: resetPassword.email,
        url: "http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password",
      })
      .then((response) => {
        // Handle success.
        console.log("Your user received an email");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }

  return (
    <>
      <div className="login-box">
        <form onSubmit={submitHandler}>
          <div className="user-box">
            <input
              type="text"
              value={resetPassword.email}
              name="email"
              required=""
              onChange={changeHandler}
            />
            <label>Type in your email to reset password</label>
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
  );
}

export default ResetPassword;
