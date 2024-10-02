import React from "react";
import Header from "./Header";
import "./css/MentorshipPage.css";

function MentorshipPage() {
  return (
    <>
      <Header />
      <div className="mentorship-page">
        <h1 className="mentorship-title">MENTORSHIP PROGRAM</h1>
        <p className="mentorship-description">
          Connect with experienced mentors to guide your academic and career
          journey.
        </p>
        <div className="action-buttons">
          <button className="join-button">Ready to Join ?</button>
          <p className="or-text">OR</p>
          <button className="mentor-button">Wanna be a Mentor ?</button>
        </div>
      </div>
    </>
  );
}

export default MentorshipPage;
