import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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
import AdminHome from "./AdminHome";
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
        <Route path="/logout" element={<Logout />} />

        <Route path="/admin" element={<ProtectedRoute element={AdminHome} allowedRoles={['Admin']} />} />
        <Route path="/mentor" element={<ProtectedRoute element={MentorHomePage} allowedRoles={['Mentor']} />} />
        <Route path="/advisor" element={<ProtectedRoute element={AdvisorHomePage} allowedRoles={['Advisor']} />} />
        <Route path="/home" element={<ProtectedRoute element={HomePage} allowedRoles={['Student']} />} />

        <Route path="/manage-users" element={<ProtectedRoute element={ManageUsers} allowedRoles={['Admin']} />} />
        <Route path="/manage-groups" element={<ProtectedRoute element={ManageGroups} allowedRoles={['Admin']} />} />
        <Route path="/manage-forums" element={<ProtectedRoute element={ManageForums} allowedRoles={['Admin']} />} />
        <Route path="/admin-user-requests" element={<ProtectedRoute element={AdminUserRequests} allowedRoles={['Admin']} />} />
        <Route path="/manage-opportunities" element={<ProtectedRoute element={ManageOpportunities} allowedRoles={['Admin']} />} />
        <Route path="/manage-events" element={<ProtectedRoute element={ManageEvents} allowedRoles={['Admin']} />} />
        <Route path="/manage-tips" element={<ProtectedRoute element={ManageTips} allowedRoles={['Admin']} />} />
        <Route path="/manage-articles" element={<ProtectedRoute element={ManageArticles} allowedRoles={['Admin']} />} />
        <Route path="/mentee-requests" element={<ProtectedRoute element={MentorshipRequests} allowedRoles={['Mentor']} />} />
        <Route path="/your-mentees" element={<ProtectedRoute element={ViewYourMentees} allowedRoles={['Mentor']} />} />
        <Route path="/build-resume" element={<ProtectedRoute element={BuildYourResume} allowedRoles={['Student']} />} />
        <Route path="/mentorship-program" element={<ProtectedRoute element={MentorshipProgram} allowedRoles={['Student']} />} />

        <Route path="/opportunities" element={<ProtectedRoute element={Opportunities} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/articles" element={<ProtectedRoute element={Articles} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/events" element={<ProtectedRoute element={Events} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/groups" element={<ProtectedRoute element={GroupsPage} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/forums" element={<ProtectedRoute element={Forums} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/forums/:forum_id" element={<ProtectedRoute element={ForumPage} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/tips" element={<ProtectedRoute element={Tips} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        <Route path="/tips/:id" element={<ProtectedRoute element={FullTipPage} allowedRoles={['Student', 'Mentor', 'Advisor']} />} />
        
        <Route path="/chats" element={<ProtectedRoute element={ChatApp} allowedRoles={['Admin', 'Mentor', 'Student', 'Advisor']} />} />
        <Route path="/notifications" element={<ProtectedRoute element={Notifications} allowedRoles={['Admin', 'Mentor', 'Student', 'Advisor']} />} />
        <Route path="/profile" element={<ProtectedRoute element={ProfilePage} allowedRoles={['Admin', 'Mentor', 'Student', 'Advisor']} />} />
        <Route path="/contact" element={<ProtectedRoute element={Contact} allowedRoles={['Admin', 'Mentor', 'Student', 'Advisor']} />} />
        <Route path="/settings" element={<ProtectedRoute element={SettingsPage} allowedRoles={['Admin', 'Mentor', 'Student', 'Advisor']} />} />        
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
