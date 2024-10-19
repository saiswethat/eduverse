import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EventListing from "./EventListing";
import EventModal from "./EventModal";
import "./css/Events.css";

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
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.265376213714!2d-97.11680912433916!3d32.73214337368247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d72c8efcf39%3A0x1ecc9af182997c37!2sNedderman%20Hall%20(NH)!5e0!3m2!1sen!2sus!4v1729303476308!5m2!1sen!2sus",
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
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.383410885919!2d-97.11628251599795!3d32.72900841859964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7dfebe751631%3A0x759040ce57b9d743!2sPickard%20Hall%20(PKH)!5e0!3m2!1sen!2sus!4v1729304447575!5m2!1sen!2sus",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  if (!sessionStorage.getItem("userId")) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }

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
    <>
      <Header />
      <div className="events">
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
              onDelete={handleDeleteEvent}
              index={index}
              mapUrl={event.mapUrl}
            />
          ))}
        </div>
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateEvent}
        />
      </div>
    </>
  );
}

export default Events;
