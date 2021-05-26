import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Menu() {
  const [getToken, setToken] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    setToken(Token);
  }, []);

  function logout() {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  return (
    <>
      {getToken ? (
        <nav className="app-nav">
          <Link exact to="/">
            Start
          </Link>

          <Link to="/login" onClick={logout}>
            Logout
          </Link>

          <Link to="/add-products">Add products</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </nav>
      ) : (
        <nav className="app-nav">
          <Link exact to="/">
            Start
          </Link>

          <Link to="/login">Login</Link>

          <Link to="/add-products">Add products</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </nav>
      )}
    </>
  );
}

export default Menu;
