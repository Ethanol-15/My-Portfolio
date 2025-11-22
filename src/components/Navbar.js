import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar fade-soft">
    
      <div className="nav-left">Ethan</div>

      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;