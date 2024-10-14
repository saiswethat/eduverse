import React from "react";
import "./css/AdvisorHomePage.css";
import Header from "./Header";

function AdvisorHomePage() {
  const userId = sessionStorage.getItem("userId");
  if (!userId) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }

  return (
    <>
      <Header />
      <div className="home-home-page text-home-center">
        <div className="home-welcome-section">
          <h1 className="home-welcome-title">Welcome to Your Advisor Dashboard</h1>
          <p className="home-welcome-message">
            As an advisor on EduVerse, you have the power to shape academic and professional paths. Here, you can create opportunities, guide mentors, and manage key resources that support students' success.
          </p>
          <div className="home-additional-content">
            <p>What you can do:</p>
            <ul>
              <li><strong>Create Events:</strong> Organize events, workshops, or conferences to provide guidance and opportunities for growth.</li>
              <li><strong>Create Groups and Forums:</strong> Set up spaces for discussions on various academic or career topics.</li>
              <li><strong>Guide Mentors:</strong> Assist mentors in supporting students and offering the best possible advice.</li>
              <li><strong>Chat with Anyone:</strong> Connect with students, mentors, or other advisors across the platform.</li>
              <li><strong>Manage Tips and Articles:</strong> Curate and oversee content that offers valuable insights to both students and mentors.</li>
            </ul>
          </div>
        </div>

        <div className="home-home-section home-upcoming-events">
          <h2 className="home-h2">Upcoming Events</h2>
          <div className="home-event-card">
            <p>Conference on AI - Oct 12, 2024</p>
            <p>Workshop on Web Development - Nov 8, 2024</p>
            <p>Data Science Summit - Dec 15, 2024</p>
          </div>
        </div>

        <div className="home-home-section home-job-postings">
          <h2 className="home-h2">Recent Job Postings</h2>
          <div className="home-job-card">
            <p>Full-Stack Developer at XYZ Company</p>
            <p>Data Analyst at ABC Corp</p>
            <p>Frontend Engineer at TechStart</p>
          </div>
        </div>
        <div className="home-home-section home-quick-links">
          <h2 className="home-h2">Quick Links</h2>
          <div className="home-link-card">
            <p><a href="/chats">Chat</a></p>
            <p><a href="/events">Events</a></p>
            <p><a href="/forums">Forums</a></p>
            <p><a href="/groups">Groups</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvisorHomePage;