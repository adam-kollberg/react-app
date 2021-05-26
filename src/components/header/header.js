import React from "react";
import Menu from "./menu";
import "./header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src="./././logo.jpeg" alt="site-logo"></img>
      </div>

      <Menu />
    </header>
  );
}

export default Header;
