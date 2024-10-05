import React, { useState } from "react";
import "./css/ForgotPassword.css"; // Importing the CSS file for the Forgot Password page
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
    <div className="flex flex-col items-center justify-start min-h-screen bg-[rgba(168,237,215,0.2)] p-4">
      <a href="/"><img
        src={iconimage}
        alt="EduVerse"
        className="mb-6 custom-image"
      /></a>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 font-jua">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Enter your New Password"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Re-enter your New Password"
            />
          </div>
          <button type="submit" className="submit-button font-jua text-3xl">
            Submit
          </button>
          <div className="mt-4 text-center">
            <a href="/" className="text-blue-500 hover:underline font-jua text-base md:text-xl">Back to Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
