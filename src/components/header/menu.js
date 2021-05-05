import React, { useState } from "react";
import{Route, BrowserRouter as Router, Link} from "react-router-dom";


function Menu() {






   


   


        return (
            
          <>

       
        <nav className = "app-nav">
        <Link exact to="/">Start</Link>
        
        <Link to="/login">Login</Link> 
        {localStorage.getItem("token") === false ??
         <Link to="/login">Logout</Link>}
    
        <Link to="/add-products">Add products</Link>
        <Link to="/my-bookings">My Bookings</Link>
        </nav>
         
     </>
        )
    }

export default Menu;