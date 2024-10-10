import React from "react";
import "./css/EventListing.css";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

function EventListing({ title, location, date, time, link, onDelete, index }) {
  return (
    <div className="event-card">
      <div className="event-card__info">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__location">{location}</p>
        {link && (
          <p className="event-card__link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Link for meeting
            </a>
          </p> // Optional link
        )}
      </div>
      <div className="event-card__date-time">
        <p className="event-card__date">{date}</p>
        <p className="event-card__time">{time}</p>
        <div className="event-interested-button-container">
          <button className="event-interested-button">Register</button>
          {/* Add the delete icon beside the register button */}
          <FaTrash
            onClick={() => onDelete(index)} // Call the delete function when clicked
            className="event-delete-icon" // CSS class for styling
            title="Delete Event" // Tooltip for better UX
            style={{ marginLeft: "10px", cursor: "pointer", color: "red" }} // Inline styles for quick adjustment
          />
        </div>

        
      </div>
    </div>
  );
}

export default EventListing;
