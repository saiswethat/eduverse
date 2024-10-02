import React from "react";
import "./css/HomePage.css";
import logoImage from "./assets/eduverseLogo.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <div className="header-text">
        <h1>Empowering Students and Academics for Success</h1>
      </div>
      <div className="left-section">
        <div className="tile black-tile">
          <h2>Explore Opportunities</h2>
          <p>Join Mentorship Program</p>
        </div>
        <div className="tile white-tile">
          <h2>Explore Career Development Resources</h2>
          <p>Resume Builder Tool</p>
        </div>
      </div>
      <div className="center-logo">
        <img src={logoImage} alt="EduVerse Logo" className="eduverse-logo" />
      </div>
      <div className="right-section">
        <div className="tile white-tile">
          <h2>Upcoming Academic Events</h2>
          <p>Conferences</p>
          <p>Workshops</p>
        </div>
        <div className="tile black-tile">
          <h2>Join the Conversations</h2>
          <p>Forums</p>
          <p>Groups</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
