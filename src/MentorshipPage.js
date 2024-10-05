import React from "react";
import Header from "./Header";
import "./css/MentorshipPage.css"; // Updated CSS file name
import mentorshipImage from "./assets/mentor.jpg"; // Import the image

function MentorshipPage() {
  return (
    <>
      <Header />
      <br />
      <div className="mentor-mentorship-page">
        <h1 className="mentor-mentorship-title">MENTORSHIP PROGRAM</h1>
        <p className="mentor-mentorship-description">
          Connect with experienced mentors to guide your academic and career
          journey.
        </p>

        <div className="mentor-mentorship-image-container">
          <img
            src={mentorshipImage}
            alt="Mentorship"
            className="mentor-mentorship-image"
          />
        </div>

        <div className="mentor-action-buttons">
          <button className="mentor-join-button">Ready to Join?</button>
          <p className="mentor-or-text">OR</p>
          <button className="mentor-mentor-button">Wanna be a Mentor?</button>
        </div>
      </div>
    </>
  );
}

export default MentorshipPage;
