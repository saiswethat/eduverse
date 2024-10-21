import React, { useState } from "react";
import Header from "./Header";
import "./css/Settings.css";
import AdminHeader from "./AdminHeader";
import { users } from "./loadData";

const SettingsPage = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [themeData, setThemeData] = useState({
    theme: "light",
  });

  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true);

  const [passwordErrors, setPasswordErrors] = useState({});
  const [themeSuccess, setThemeSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  
  const userId = sessionStorage.getItem("userId");
  if (!userId) {
    alert("Please login to continue");
    window.location.href = "/login";
    return;
  }

  const currentUser = users[userId];

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    setThemeData({
      theme,
    });
    document.body.setAttribute("data-theme", theme);
  };

  const handleEmailToggleChange = () => {
    setEmailNotificationsEnabled((prev) => !prev);
  };

  const validatePasswordFields = () => {
    const newErrors = {};
    const { currentPassword, newPassword, confirmNewPassword } = passwordData;

    if (!currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword === currentPassword) {
      newErrors.newPassword = "New password cannot be the same as the current password";
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters long and include a number and a special character";
    }

    if (newPassword !== confirmNewPassword) {
      newErrors.confirmNewPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePasswordFields();
    if (Object.keys(validationErrors).length === 0) {
      setPasswordSuccess(true);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setPasswordErrors({});
    } else {
      setPasswordErrors(validationErrors);
    }
  };

  return (
    <div>
      {currentUser.user_type === "Admin" ? <AdminHeader /> : <Header />}
      <div className="settings-container">
        <h2>Settings</h2>

        <div className="card">
          <h3>Reset Password</h3>
          {passwordSuccess && <div className="success-message">Password has been updated successfully!</div>}
          <form onSubmit={handlePasswordSubmit}>
            <div className="input-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordInputChange}
                placeholder="Enter current password"
              />
              {passwordErrors.currentPassword && <span className="error-message">{passwordErrors.currentPassword}</span>}
            </div>

            <div className="input-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordInputChange}
                placeholder="Enter new password"
              />
              {passwordErrors.newPassword && <span className="error-message">{passwordErrors.newPassword}</span>}
            </div>

            <div className="input-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmNewPassword"
                value={passwordData.confirmNewPassword}
                onChange={handlePasswordInputChange}
                placeholder="Confirm new password"
              />
              {passwordErrors.confirmNewPassword && <span className="error-message">{passwordErrors.confirmNewPassword}</span>}
            </div>

            <div className="submit-btn">
              <button type="submit">Save Password</button>
            </div>
          </form>
        </div>

        <div className="card">
          <h3>Change Theme</h3>
          {themeSuccess && <div className="success-message">Theme has been updated successfully!</div>}
          <form onSubmit={(e) => { e.preventDefault(); setThemeSuccess(true); }}>
            <div className="input-group">
              <label>Theme</label>
              <select name="theme" value={themeData.theme} onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="submit-btn">
              <button type="submit">Save Theme</button>
            </div>
          </form>
        </div>

        <div className="card">
          <h3>Notification Preferences</h3>
          <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="toggle-container">
          <div className="input-group-notification">
            <label>Enable Email Notifications</label>
            <div className="toggle-container">
              <label className="toggle-switch">
                <input type="checkbox" checked={emailNotificationsEnabled} onChange={handleEmailToggleChange} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
