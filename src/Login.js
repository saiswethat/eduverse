import React, { useState } from "react";
import "./css/Login.css";
import iconimage from "./assets/eduverse.jpg";
import { users } from "./loadData";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loadHomePage = (userType) => {
    switch (userType) {
      case 'Admin':
        window.location.href = "/admin_home";
        break;
      case 'Advisor':
        window.location.href = "/advisor";
        break;
      case 'Mentor':
        window.location.href = "/mentor";
        break;
      case 'Student':
        window.location.href = "/home";
        break;
      default:
        window.location.href = "/login";
        break;
    }
  };  

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = Object.values(users).find(user => user.email === email && user.password === password);

    if (user) {
      sessionStorage.setItem('userId', user.user_id);
      console.log('Logged in user:', user.user_id);
      loadHomePage(user.user_type);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-flex login-flex-col login-items-center login-justify-start login-min-h-screen login-bg-[rgba(168,237,215,0.2)] login-p-4">
      <a href="/">
        <img
          src={iconimage}
          alt="EduVerse"
          className="login-custom-image"
        />
      </a>
      <div className="login-bg-white login-p-8 login-rounded-lg login-shadow-md login-w-full login-max-w-md login-mt-4">
        <h1 className="login-text-4xl login-md-text-5xl login-font-bold login-text-center login-text-gray-800 login-font-jua">Login</h1>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input-box login-font-jua"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input-box login-font-jua"
              placeholder="Enter your Password"
            />
          </div>
          <button type="submit" className="login-submit-button login-font-jua login-text-2xl">
            Submit
          </button>
          <div className="login-mt-4 login-text-center">
            <a href="/forgot-password" className="login-text-blue-500 login-hover-underline login-font-jua login-text-base login-md-text-xl">Forgot Password?</a>
            <br />
            <a href="/register" className="login-text-blue-500 login-hover-underline login-font-jua login-text-base login-md-text-xl">New User? Create An Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;