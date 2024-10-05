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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/opportunities">Opportunities</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>

          {/* Resources Dropdown */}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Resources</a>
            <div className="dropdown-content">
              <a href="/mentorship-program">Mentorship Program</a>

              {/* Career Development Submenu */}
              <div className="nested-dropdown">
                <a href="#" className="dropdown-toggle">Career Development</a>
                <div className="nested-content">
                  <a href="/articles">Articles</a>
                  <a href="/tips">Tips</a>
                  <a href="/build-resume">Build your resume</a>
                </div>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Networking</a>
            <div className="dropdown-content">
              <a href="/groups">Groups</a>
              <a href="/forums">Forums</a>
            </div>
          </li>
          <li>
            <a href="/chats">Chat</a>
          </li>

          {/* Name Dropdown */}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Name</a>
            <div className="dropdown-content">
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
