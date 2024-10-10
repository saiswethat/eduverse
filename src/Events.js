
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EventListing from "./EventListing";
import EventModal from "./EventModal"; // Import the modal component
import "./css/Events.css";
import { FaTrash } from "react-icons/fa";

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([
    {
      title: "Tech Conference 2024",
      location: "New York, NY",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      link: "https://example.com",
    },
    {
      title: "Web Development Workshop",
      location: "Austin, TX",
      date: "February 10, 2024",
      time: "9:00 AM - 1:00 PM",
    },
    {
      title: "Data Science Meetup",
      location: "San Francisco, CA",
      date: "April 22, 2024",
      time: "6:00 PM - 8:00 PM",
      link: "https://example.com",
    },
    {
      title: "AI Expo",
      location: "Los Angeles, CA",
      date: "May 30, 2024",
      time: "11:00 AM - 5:00 PM",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleDeleteEvent = (index) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };
  

  

  return (
    <div className="events">
      <Header />
      <h2 className="event-center-event">Events</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div className="button-center">
        <button className="create-event-button" onClick={() => setIsModalOpen(true)}>
          Create Event
        </button>
      </div>
      <div className="event-listings">
    {filteredEvents.map((event, index) => (
      <EventListing
        key={index}
        title={event.title}
        location={event.location}
        date={event.date}
        time={event.time}
        link={event.link}
        onDelete={handleDeleteEvent} // Pass the delete handler
        index={index} // Pass the index of the event
      />
    ))}
  </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateEvent}
      />
    </div>
  );
}

export default Events;
