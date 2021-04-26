import React, { useState } from "react";

import { NavLink } from "react-router-dom";


function Booking() {
  
  const bookingValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
    
  }

  const [formValues, setFormValues] = useState(bookingValues);

  function onSubmit(e) {
    e.preventDefault();
    
  
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      
    });
   
  }

  return (
<>
<section className="hero">
 
</section>

<div className="login-box">
  <h2>BOOK NOW</h2>
  
  <form onSubmit={onSubmit}>
  <div className="user-box">
      <input type="text" name="name" required="" onChange={onChange}  />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="email" required="" onChange={onChange}  />
      <label>Email</label>
    </div>
    
    <div className="user-box">
      <input type="text" name="adress" required="" onChange={onChange} />
      <label>adress</label>
    </div>

    <div className="user-box">
      <input type="number" name="phone" required="" onChange={onChange} />
      <label>Phone</label>
    </div>

   
    <button >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      BOOK
    </button>
  
  
  </form>
</div>
        
        
    </>
  );
}

export default Booking;