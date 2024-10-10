import React from "react";
import "./css/Header.css";
import logoImage from "./assets/edvlogo.jpg";

function Header() {
  return (
    <header className="header-header">
      <div className="header-header__logo">
        <img src={logoImage} alt="EduVerse Logo" />
      </div>
      <nav className="header-header__nav">
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

          <li className="header-dropdown">
            <a href="#" className="header-dropdown-toggle">
              Resources
            </a>
            <div className="header-dropdown-content">
              <a href="/mentorship-program">Mentorship Program</a>

              <div className="header-nested-dropdown">
                <a href="#" className="header-dropdown-toggle">
                  Career Development
                </a>
                <div className="header-nested-content">
                  <a href="/articles">Articles</a>
                  <a href="/tips">Tips</a>
                  <a href="/build-resume">Build your resume</a>
                </div>
              </div>
            </div>
          </li>

          <li className="header-dropdown">
            <a href="#" className="header-dropdown-toggle">
              Networking
            </a>
            <div className="header-dropdown-content">
              <a href="/groups">Groups</a>
              <a href="/forums">Forums</a>
            </div>
          </li>
          <li>
            <a href="/chats">Chat</a>
          </li>
          <li>
            <a href="/requests">Requests</a>
          </li>
          <li>
            <a href="/your-mentees">Your Mentees</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li className="header-dropdown">
            <a href="#" className="header-dropdown-toggle">
              Name
            </a>
            <div className="header-dropdown-content">
              <a href="/profile">Profile</a>
              <a href="/notifications">
                {" "}
                Notifications
                <span className="notification-badge">3</span>
              </a>
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
