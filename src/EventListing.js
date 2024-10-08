import React from "react";
import "./css/EventListing.css";

function EventListing({ title, location, date }) {
  return (
    <div className="event-card">
      <div className="event-card__info">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__location">{location}</p>
        <p className="event-card__date">{date}</p>
      </div>
      <div className="event-interested-button-container">
        <button className="event-interested-button">Interested</button>
      </div>
    </div>
  );
}

export default EventListing;
