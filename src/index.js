import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import reportWebVitals from "./reportWebVitals";
import Register from "./Register";
import Opportunities from "./Opportunities";
import Articles from "./Articles";
import Tips from "./Tips";
import FullTipPage from "./FullTipPage";
import BuildYourResume from "./BuildYourResume";
import Events from "./Events";
import GroupsPage from "./GroupsPage";
import ChatApp from "./ChatApp";
import Notifications from "./Notifications";
import MentorshipProgram from "./MentorshipProgram";
import MentorshipRequests from "./MentorshipRequests";
import ViewYourMentees from "./ViewYourMentees";
import ProfilePage from "./Profile";
import Admin_home from "./Admin_home";
import ManageUsers from "./ManageUsers";
import Forums from "./Forums";
import ForumPage from "./ForumPage";
import Contact from "./Contact";
import SettingsPage from "./SettingsPage";
import AdvisorHomePage from "./AdvisorHomePage";
import MentorHomePage from "./MentorHomePage";
import HomePage from "./Homepage";
import ManageGroups from "./Manage_groups";
import ManageForums from "./Manage_forums";
import AdminUserRequests from "./AdminUserRequests";
import ManageOpportunities from "./ManageOpportunities";
import ManageEvents from "./ManageEvents";
import ManageTips from "./ManageTips";
import ManageArticles from "./ManageArticles";
import Logout from "./Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/build-resume" element={<BuildYourResume />} />
        <Route path="/events" element={<Events />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/chats" element={<ChatApp />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mentee-requests" element={<MentorshipRequests />} />
        <Route path="/mentorship-program" element={<MentorshipProgram />} />
        <Route path="/your-mentees" element={<ViewYourMentees />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:forum_id" element={<ForumPage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:id" element={<FullTipPage />} />
        <Route path="/admin_home" element={<Admin_home />} />
        <Route path="/manage_users" element={<ManageUsers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/advisor" element={<AdvisorHomePage />} />
        <Route path="/mentor" element={<MentorHomePage />} />
        <Route path="/manage-groups" element={<ManageGroups />} />
        <Route path="/manage-forums" element={<ManageForums />} />
        <Route path="/admin-user-requests" element={<AdminUserRequests />} />
        <Route path="/manage-opportunities" element={<ManageOpportunities />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/manage-tips" element={<ManageTips />} />
        <Route path="/manage-articles" element={<ManageArticles />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
