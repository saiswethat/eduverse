import React, { useEffect, useState } from "react";
import "./css/Login.css";
import iconimage from "./assets/eduverse.jpg";
import { users } from "./loadData";
import GuestHeader from "./Header";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    console.log("User ID from session storage:", userId); 

    if (userId) {
      const user = Object.values(users).find(user => user.user_id.toString() === userId);
      console.log("User found:", user); 
      if (user) {
        const routes = {
          Admin: "/admin",
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
    const user = Object.values(users).find(user => user.email === email && user.password === password);
    if (user) {
      sessionStorage.setItem('userId', user.user_id);
      sessionStorage.setItem('userRole', user.user_type);
      console.log("User logged in:", user); 
      const routes = {
        Admin: "/admin",
        Advisor: "/advisor",
        Mentor: "/mentor",
        Student: "/home",
      };
      window.location.replace(routes[user.user_type] || "/home");
    } else {
      setError('Invalid email or password');
      console.log("Login failed: Invalid email or password"); 
    }
  };

  return (
    <>
      <GuestHeader />
      <div className="login-flex">
        <a href="/">
          <img src={iconimage} alt="EduVerse" className="login-custom-image" />
        </a>
        <div className="login-bg-white">
          <h1 className="login-header">Login</h1>
          {error && <p className="login-error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input-box"
              placeholder="Enter your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input-box"
              placeholder="Enter your Password"
            />
            <button type="submit" className="login-submit-button">Submit</button>
            <div className="login-links">
              <a href="/forgot-password" className="login-link">Forgot Password?</a>
              <br />
              <a href="/register" className="login-link">New User? Create An Account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
