import React, { useState } from "react";
import "./css/Events.css";

function EventModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [link, setLink] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, location, date, startTime, endTime, link, mapUrl, description });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setLink("");
    setMapUrl("");
    setDescription("");
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
          <textarea
            id="description"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className ="text-text-text"
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
          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <label htmlFor="endTime">End Time</label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Meeting Link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="url"
            id="mapUrl"
            placeholder="Map Link (optional)"
            value={mapUrl}
            onChange={(e) => setMapUrl(e.target.value)}
          />
          
          <button type="submit" className="event-modal-submit-button">Create Event</button>
          <button type="button" onClick={handleClose} className="event-modal-close-button">Close</button>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
