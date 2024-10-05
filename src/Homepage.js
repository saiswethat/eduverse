import React from "react";
import "./css/HomePage.css"; // Updated CSS file name

function HomePage() {
  return (
    <div className="home-home-page">
      <div className="home-header-text">
        <h1>Empowering Students and Academics for Success</h1>
      </div>
      <div className="home-left-section">
        <div className="home-tile home-black-tile text-center">
          <h2>Explore Opportunities</h2>
          <p>Join Mentorship Program</p>
        </div>
        <div className="home-tile home-white-tile">
          <h2>Explore Career Development Resources</h2>
          <p>Resume Builder Tool</p>
        </div>
      </div>
      <div className="home-right-section">
        <div className="home-tile home-white-tile">
          <h2>Upcoming Academic Events</h2>
          <p>Conferences</p>
          <p>Workshops</p>
        </div>
        <div className="home-tile home-black-tile">
          <h2>Join the Conversations</h2>
          <p>Forums</p>
          <p>Groups</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
