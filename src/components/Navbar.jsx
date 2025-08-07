import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
        <span className="brand-name">Kijo</span>
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#residences">Residences</a></li>
        <li><a href="#value">Value</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#map">Map</a></li>
      </ul>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
