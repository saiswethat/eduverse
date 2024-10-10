import React from "react";
import "./css/AdvisorHomePage.css";
import logoImage from "./assets/eduverseLogo.jpg";

function AdvisorHomePage() {
  return (
    <div className="advisor-home-page">
      <div className="header-text">
        <h1>Supporting Advisors to Guide Future Leaders</h1>
      </div>
      <div className="left-section">
        <div className="tile black-tile text-center">
          <h2>Manage Mentorship Programs</h2>
          <p>Connect with Students</p>
        </div>
        <div className="tile white-tile">
          <h2>Provide Career Guidance</h2>
          <p>Help Shape Resumes & Cover Letters</p>
        </div>
      </div>
      <div className="right-section">
        <div className="tile white-tile">
          <h2>Upcoming Advisor Meetings</h2>
          <p>Collaborative Sessions</p>
          <p>Workshops on Mentorship</p>
        </div>
        <div className="tile black-tile">
          <h2>Engage in Discussions</h2>
          <p>Advisor Forums</p>
          <p>Best Practices Groups</p>
        </div>
      </div>
    </div>
  );
}

export default AdvisorHomePage;