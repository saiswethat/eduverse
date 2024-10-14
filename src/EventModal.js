import React, { useState } from "react";
import "./css/Events.css";

function EventModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, location, date, time, link });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setLink("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="event-modal-overlay">
      <div className="event-modal-content">
        <h2 className="event-center">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="submit" className="event-modal-submit-button">Create Event</button>
          <button onClick={handleClose} className="event-modal-close-button">Close</button>
        </form>
        
      </div>
    </div>
  );
}

export default EventModal;
