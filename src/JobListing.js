import React from "react";
import "./css/JobListing.css"; // Updated CSS file name

function JobListing({ title, company, location }) {
  return (
    <div className="jobListing-job-card">
      <div className="jobListing-job-card__info">
        <h3 className="jobListing-job-card__title">{title}</h3>
        <a href="#" className="jobListing-job-card__company">
          {company}
        </a>
        <div className="jobListing-interested-button-container">
          <button className="jobListing-interested-button">Interested</button>
        </div>
      </div>
      <div className="jobListing-job-card__location">
        <p>{location}</p>
      </div>
    </div>
  );
}

export default JobListing;
