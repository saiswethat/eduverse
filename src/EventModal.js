// EventModal.js
import React, { useState } from "react";
import "./css/Events.css"; // Ensure your CSS has relevant styles

function EventModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, location, date, time, link });
    resetForm(); // Reset form after creating
    onClose(); // Close modal after creating
  };

  // Reset form inputs
  const resetForm = () => {
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setLink("");
  };

  // Close the modal and reset form inputs
  const handleClose = () => {
    resetForm(); // Reset form values
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
          <button type="submit" className="modal-submit-button">Create Event</button>
        </form>
        <button onClick={handleClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
}

export default EventModal;
