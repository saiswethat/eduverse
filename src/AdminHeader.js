import React from 'react';
import './css/Admin_header.css';
import logoImage from "./assets/edvlogo.jpg";
import { users } from './loadData';

function AdminHeader() {
  const userId = sessionStorage.getItem("userId");
  if(!userId){
    alert("Please login to continue");
    window.location.href = "/login";
  }
  const currentUser = users[userId];
    return (
        <header className="admin_header-header">
        <div className="admin_header-header__logo">
          <img src={logoImage} alt="EduVerse Logo" />
        </div>
        <nav className="admin_header-header__nav">
          <ul>
          <li>
              <a href="/admin">Home</a>
            </li>
            <li>
              <a href="/manage-users">Users</a>
            </li>
            <li>
              <a href="/admin-user-requests">Requests</a>
            </li>
            <li>
              <a href="/manage-opportunities">Opportunities</a>
            </li>
  
            <li className="admin_header-dropdown">
              <a href="#" className="admin_header-dropdown-toggle">Resources</a>
              <div className="admin_header-dropdown-content">
                <a href="/manage-events">Events</a>
                <a href="/manage-groups">Groups</a>
                <a href="/manage-forums">Forums</a>
                <a href="/manage-articles">Articles</a>
                <a href="/manage-tips">Tips</a>
              </div>
            </li>
  
            <li>
              <a href="/chats">Chat</a>
            </li>
            <li className="admin_header-dropdown">
              <a href="#" className="admin_header-dropdown-toggle">{currentUser.user_name}</a>
              <div className="admin_header-dropdown-content">
                <a href="/profile">Profile</a>
                <a href="/notifications"> Notifications
                <span className="admin_notification-badge">4</span>
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

export default AdminHeader;