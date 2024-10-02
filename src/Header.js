import React from "react";
import "./css/Header.css";
import logoImage from "./assets/edvlogo.jpg";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoImage} alt="EduVerse Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Opportunities</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Networking</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">Name</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
