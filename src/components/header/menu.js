import React, { useState, useEffect } from "react";
import{Route, BrowserRouter as Router, Link} from "react-router-dom";


function Menu() {

  const [getToken, setToken]=useState(false);


  useEffect (()=>{
    const Token = localStorage.getItem("token");
    setToken(Token);
   
   
   
   
     }, [])

   


   


        return (
      
          <>
          {getToken ? 

        <nav className = "app-nav">
        <Link exact to="/">Start</Link>
        
        <Link to="/login">Logout</Link>
        
      <Link to="/add-products">Add products</Link>
        <Link to="/my-bookings">My Bookings</Link>
        </nav> :   



        <nav className = "app-nav">
        <Link exact to="/">Start</Link>
        
        
        
        <Link to="/login">Login</Link>
    
        <Link to="/add-products">Add products</Link>
        <Link to="/my-bookings">My Bookings</Link>
        </nav>
        }

</>


         
     
        )
    }

export default Menu;