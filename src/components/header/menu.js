import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Menu() {
  const [getRole, setRole] = useState("");

  useEffect(() => {
    const Role = localStorage.getItem("role");
    setRole(Role);
  }, []);
  
  const history = useHistory();

  

  function logout() {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  return (
    <>
      {getRole === "admin" ? (
        <nav className="app-nav">
          
          <Link exact to="/">
            Start</Link>

          <Link to="/login" onClick={logout}>
            Logga ut
          </Link>
        <Link to="/add-products">Lägg till Möten</Link>
        
          
      </nav>
      ) : (
        <nav className="app-nav">
          <Link exact to="/">
            Start
          </Link>

          <Link to="/login" onClick={logout}>
            Logga ut
          </Link>
         <Link to="/my-bookings">Mina bokningar</Link>

         <Link to="/my-profile">Min profil</Link>
          
        </nav>
      )}
    </>
  ) 
}

export default Menu;
