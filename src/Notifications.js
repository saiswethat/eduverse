import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./css/Notifications.css";
import { users } from "./loadData";
import Admin_Header from "./Admin_header";

function Notifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, text: "This ia a very long text to show that the applications wrpas the whole content into the notification card display Your profile was viewed by 5 people", isRead: false },
    { id: 2, text: "You have a new message from John", isRead: false },
    { id: 3, text: "Your subscription is about to expire", isRead: false },
    { id: 4, text: "Reminder: Meeting at 3 PM tomorrow", isRead: false },
  ]);

  const userId = sessionStorage.getItem("userId");
  if (!userId) {
    alert("Please login to continue");
    window.location.href = "/login";
  }
  const currentUser = users[userId];

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <>
      {(currentUser.user_type === "Admin") ? <Admin_Header /> : <Header />}
      <div className="notifications-page">
        <SearchBar onSearch={setSearchTerm} />
        <div className="clear-all">
          <button className="clear-all-button" onClick={clearAll}>
            Clear All
          </button>
        </div>
        <div className="notifications-list">
          <ul className="list-items">
            {notifications.length === 0 ? (
              <p>No notifications available</p>
            ) : (
              notifications.map((notification) => (
                <div className="notifications-card">
                  <li key={notification.id} className={`notification-item ${notification.isRead ? "read" : ""}`}>
                    <div className="notification-content">
                      <span className="notification-text">{notification.text}</span>
                    </div>
                    <div className="notification-actions">
                      {!notification.isRead && (
                        <button className="mark-read-button" onClick={() => markAsRead(notification.id)}>
                          Mark as Read
                        </button>
                      )}
                      <button className="delete-button" onClick={() => deleteNotification(notification.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notifications;
