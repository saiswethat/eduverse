import React from "react";
import "./css/JobListing.css";

function JobListing({ title, company, location, description }) {
  return (
    <div className="jobListing-job-card">
      <div className="jobListing-interested-button-container">
        <button className="jobListing-interested-button">Interested</button>
      </div>

      <div className="jobListing-job-card__info">
        <h3 className="jobListing-job-card__title">{title}</h3>
        <a href="#" className="jobListing-job-card__company">
          {company}
        </a>
        <p className="jobListing-job-card__description">{description}</p>
        <p className="jobListing-job-card__location">{location}</p>
      </div>
    </div>
  );
}

export default JobListing;
