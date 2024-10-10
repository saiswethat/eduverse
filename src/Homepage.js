import React from "react";
import "./css/HomePage.css"; 

function HomePage() {
  return (
    <div className="home-home-page text-home-center">
      <div className="home-welcome-section">
        <h1 className="home-welcome-title">Welcome to EduVerse</h1>
        <p className="home-welcome-message">
          EduVerse is your one-stop platform for connecting students, academics, and professionals. Explore upcoming events, recent job postings, and access quick links to tools that will help you on your journey to success.
        </p>

        <div className="home-additional-content">
          <p>
            At EduVerse, you'll find everything you need to succeed:
          </p>
          <ul>
            <li><strong>Networking:</strong> Join interest-based groups, engage in forums, and connect with others through private messaging.</li>
            <li><strong>Opportunities:</strong> Browse job postings, internships, and research opportunities that match your career goals.</li>
            <li><strong>Academic Events:</strong> Stay updated on upcoming conferences, workshops, and webinars relevant to your field.</li>
            <li><strong>Career Resources:</strong> Utilize tools like the resume builder, and read articles offering tips for professional growth.</li>
            <li><strong>Mentorship:</strong> Get guidance from experienced mentors to help you navigate your academic and career journey.</li>
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
          <p><a href="/mentorship-program">Join Mentorship Program</a></p>
          <p><a href="/build-resume">Resume Builder Tool</a></p>
          <p><a href="/forums">Forums</a></p>
          <p><a href="/groups">Groups</a></p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
