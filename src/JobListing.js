import React from "react";
import "./css/JobListing.css";

function JobListing({ title, company, location }) {
  return (
    <div className="job-card">
      <div className="job-card__info">
        <h3 className="job-card__title">{title}</h3>
        <a href="#" className="job-card__company">
          {company}
        </a>
        <div className="interested-button-container">
          <button className="interested-button">Interested</button>
        </div>
      </div>
      <div className="job-card__location">
        <p>{location}</p>
      </div>
    </div>
  );
}

export default JobListing;
