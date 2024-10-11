import React from "react";
import "./css/AdvisorHomePage.css";
import Header from "./Header";

function AdvisorHomePage() {
  return (
    <>
    <Header />
    <div className="advisor-home-page">
      <div className="advisor-welcome-section">
        <h1 className="advisor-welcome-title">Welcome to EduVerse Advisor Hub</h1>
        <p className="advisor-welcome-message">
          As an advisor, you play a pivotal role in guiding the next generation of leaders. Here you can manage mentorship programs, provide career guidance, and engage with other advisors.
        </p>
        <div className="advisor-additional-content">
          <p>At your disposal:</p>
          <ul>
            <li><strong>Mentorship Programs:</strong> Manage and connect with students for personalized guidance.</li>
            <li><strong>Career Guidance:</strong> Assist students with resume reviews, cover letter crafting, and interview preparation.</li>
            <li><strong>Advisor Discussions:</strong> Participate in forums and best practice groups to collaborate with fellow advisors.</li>
            <li><strong>Upcoming Meetings:</strong> Stay informed about upcoming advisor collaboration sessions and mentorship workshops.</li>
          </ul>
        </div>
      </div>

      <div className="advisor-home-section advisor-upcoming-meetings">
        <h2 className="advisor-h2">Upcoming Advisor Meetings</h2>
        <div className="advisor-meeting-card">
          <p>Collaborative Session - Oct 18, 2024</p>
          <p>Workshop on Mentorship Best Practices - Nov 10, 2024</p>
          <p>Advisor Panel Discussion - Dec 5, 2024</p>
        </div>
      </div>

      <div className="advisor-home-section advisor-discussions">
        <h2 className="advisor-h2">Engage in Discussions</h2>
        <div className="advisor-discussion-card">
          <p>Best Practices in Career Guidance</p>
          <p>Strategies for Effective Mentorship</p>
          <p>Building Strong Advisor-Student Relationships</p>
        </div>
      </div>
      
      <div className="advisor-home-section advisor-quick-links">
        <h2 className="advisor-h2">Quick Links</h2>
        <div className="advisor-link-card">
          <p><a href="/requests">View Mentorship Requests</a></p>
          <p><a href="/advisor-forums">Advisor Forums</a></p>
          <p><a href="/career-guidance-tools">Career Guidance Tools</a></p>
          <p><a href="/upcoming-meetings">Upcoming Meetings</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AdvisorHomePage;