import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import reportWebVitals from "./reportWebVitals";
import Register from "./Register";
import App from "./App";
import Opportunities from "./Opportunities";
import MentorshipPage from "./MentorshipPage";
import Articles from "./Articles";
import Tips from "./Tips";
import BuildYourResume from "./BuildYourResume";
import Events from "./Events";
import GroupsPage from "./GroupsPage";
import ChatApp from "./ChatApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<App />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/mentorship-program" element={<MentorshipPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/build-resume" element={<BuildYourResume />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/events" element={<Events />} />
        <Route path="/groups" element={<GroupsPage/>}/>
        <Route path="/chats" element={<ChatApp/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
