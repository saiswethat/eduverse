import React, { useState } from "react";
import "./css/Login.css"; // Importing the CSS file for the Login page
import iconimage from "./assets/eduverse.jpg"; // Import the logo

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[rgba(168,237,215,0.2)] p-4">
      <a href="/">
        <img
          src={iconimage}
          alt="EduVerse"
          className="custom-image mb-6" 
        />
      </a>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 font-jua">Login</h1>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-box font-jua"
              placeholder="Enter your Password"
            />
          </div>
          <button type="submit" className="submit-button font-jua text-2xl">
            Submit
          </button>
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-blue-500 hover:underline font-jua text-base md:text-xl">Forgot Password?</a>
            <br />
            <a href="/register" className="text-blue-500 hover:underline font-jua text-base md:text-xl">New User? Create An Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
