import React, { useState,useEffect } from "react";
import "./css/Register.css"; 
import logoImage from "./assets/eduverseLogo.jpg"; 
import GuestHeader from "./Header";
import { users } from "./loadData";

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    console.log("User ID from session storage:", userId); 

    if (userId) {
      const user = Object.values(users).find(user => user.user_id.toString() === userId);
      console.log("User found:", user); 
      if (user) {
        const routes = {
          Admin: "/admin_home",
          Advisor: "/advisor",
          Mentor: "/mentor",
          Student: "/home",
        };
        window.location.replace(routes[user.user_type] || "/home");
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <>
    <GuestHeader/>
    <div className="register-flex register-flex-col register-items-center register-justify-start register-min-h-screen register-bg-[rgba(168,237,215,0.2)] register-p-4">
      <a href="/"><img
        src={logoImage}
        alt="EduVerse"
        className="register-mb-6 register-custom-image"
      /></a>
      <div className="register-bg-white register-p-8 register-rounded-lg register-shadow-md register-w-full register-max-w-md register-flex register-flex-col register-items-center">
        <h1 className="register-text-4xl register-md-text-5xl register-font-bold register-text-center register-text-gray-800 register-font-jua">Register</h1>
        <form onSubmit={handleSubmit} className="register-w-full">
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="register-input-box register-font-jua"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register-input-box register-font-jua"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register-input-box register-font-jua"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="register-input-box register-font-jua"
              placeholder="Re-enter your Password"
            />
          </div>
          <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="register-input-box register-font-jua"
              placeholder="Phone Number"
            />
          </div>
          <button type="submit" className="register-submit-button register-font-jua register-text-2xl">
            Submit
          </button>
          <div className="register-mt-4 register-text-center">
            <a href="/" className="register-text-blue-500 register-hover-underline register-font-jua register-text-base register-md-text-xl">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;
