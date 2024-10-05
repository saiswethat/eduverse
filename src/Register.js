import React, { useState } from "react";
import "./css/Register.css"; // Importing the CSS file for the Register page
import logoImage from "./assets/eduverseLogo.jpg"; // Import the logo

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
    <div className="flex flex-col items-center justify-start min-h-screen bg-[rgba(168,237,215,0.2)] p-4">
      <a href="/"><img
        src={logoImage}
        alt="EduVerse"
        className="mb-6 custom-image"
      /></a>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 font-jua">Register</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Full Name"
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Enter your Password"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Re-enter your Password"
            />
          </div>
          <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Phone Number"
            />
          </div>
          <button type="submit" className="submit-button font-jua text-2xl">
            Submit
          </button>
          <div className="mt-4 text-center">
            <a href="/" className="text-blue-500 hover:underline font-jua text-base md:text-xl">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
