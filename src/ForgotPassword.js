import React, { useState } from "react";
import "./css/ForgotPassword.css"; // Updated CSS file name
import iconimage from "./assets/eduverse.jpg"; // Import the logo

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Password reset for:', email);
    console.log('New Password:', newPassword);
  };

  return (
    <div className="forget-flex forget-flex-col forget-items-center forget-justify-start forget-min-h-screen forget-bg-[rgba(168,237,215,0.2)] forget-p-4">
      <a href="/"><img
        src={iconimage}
        alt="EduVerse"
        className="forget-mb-6 forget-custom-image"
      /></a>
      <div className="forget-bg-white forget-p-8 forget-rounded-lg forget-shadow-md forget-w-full forget-max-w-md">
        <h1 className="forget-text-4xl forget-md-text-5xl forget-font-bold forget-text-center forget-text-gray-800 forget-font-jua">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="forget-input-box forget-font-jua"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="forget-input-box forget-font-jua"
              placeholder="Enter your New Password"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="forget-input-box forget-font-jua"
              placeholder="Re-enter your New Password"
            />
          </div>
          <button type="submit" className="forget-submit-button forget-font-jua forget-text-3xl">
            Submit
          </button>
          <div className="forget-mt-4 forget-text-center">
            <a href="/" className="forget-text-blue-500 forget-hover-underline forget-font-jua forget-text-base forget-md-text-xl">Back to Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
