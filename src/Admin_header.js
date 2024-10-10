import React from 'react';
import './css/Admin_header.css';
import logoImage from "./assets/edvlogo.jpg";

function Admin_Header() {
    return (
        <header className="admin_header-header">
        <div className="admin_header-header__logo">
          <img src={logoImage} alt="EduVerse Logo" />
        </div>
        <nav className="admin_header-header__nav">
          <ul>
          <li>
              <a href="/admin_home">Home</a>
            </li>
            <li>
              <a href="/manage_users">Users</a>
            </li>
            <li>
              <a href="/opportunities">Requests</a>
            </li>
            <li>
              <a href="/events">Oppurtunities</a>
            </li>
  
            {/* Resources Dropdown */}
            <li className="admin_header-dropdown">
              <a href="#" className="admin_header-dropdown-toggle">Resources</a>
              <div className="admin_header-dropdown-content">
                <a href="/mentorship-program">Events</a>
                <a href="/mentorship-program">Groups</a>
                <a href="/mentorship-program">Forums</a>
                <a href="/mentorship-program">Articles</a>
                <a href="/mentorship-program">Tips</a>
                
              </div>
            </li>
  
           
            <li>
              <a href="/chats">Chat</a>
            </li>
            <li className="admin_header-dropdown">
              <a href="#" className="admin_header-dropdown-toggle">Name</a>
              <div className="admin_header-dropdown-content">
                <a href="/profile">Profile</a>
                <a href="/notifications"> Notifications
                <span className="admin_notification-badge">3</span>
                </a>
                <a href="/settings">Preferences</a>
                <a href="/logout">Logout</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Admin_Header;
