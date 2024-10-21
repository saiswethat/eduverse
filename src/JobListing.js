import React from "react";
import { FaTrash } from "react-icons/fa";
import "./css/JobListing.css";

function JobListing({ title, company, location, description, link, onDelete }) {
  return (
    <div className="jobListing-job-card">
      <div className="jobListing-button-container">
        <a href={link} target="_blank" rel="noopener noreferrer" className="jobListing-interested-button">
          Interested
        </a>
        {(sessionStorage.getItem("userRole") !== "Student") &&
          <button className="jobListing-delete-button" onClick={onDelete}>
            <FaTrash />
          </button>
        }
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
