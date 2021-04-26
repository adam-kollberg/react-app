import React from "react";
import{Route, BrowserRouter as Router, Link} from "react-router-dom";


function Menu() {
        return (
          
        <nav className = "app-nav">
        <Link exact to="/">Start</Link>
        <Link to="/login">Login</Link>
        <Link to="/my-bookings">My Bookings</Link>
        </nav>
         

        )
    }

export default Menu;