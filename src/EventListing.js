import React, { useState } from "react";
import "./css/EventListing.css";
import { FaTrash, FaMapMarkerAlt } from "react-icons/fa";

function EventListing({ title, location, date, time, link, mapUrl, onDelete, index }) {
  const [isMapOpen, setIsMapOpen] = useState(false); 

  const toggleMap = () => {
    setIsMapOpen(!isMapOpen); 
  };

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
          </p>
        )}
        <p className="event-card__date">Date: {date}</p>
        <p className="event-card__time">Time: {time}</p>
      </div>


      <div className="event-card__buttons">
        {mapUrl ? (
          <FaMapMarkerAlt onClick={toggleMap}
            className="event-map-icon"
            title="Map" />
        ): (<FaMapMarkerAlt onClick={toggleMap}
          className="event-map-icon-hide"
          title="Map" />) }
        <button className="event-interested-button">Register</button>
        <FaTrash
          onClick={() => onDelete(index)}
          className="event-delete-icon"
          title="Delete Event"
        />
      </div>
      {mapUrl && (
        <div className={`event-card__map-container ${isMapOpen ? 'open' : ''}`}>
          <h4>Location Map</h4>
          <iframe
            title="Event Location"
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default EventListing;
