import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EventListing from "./EventListing";
import "./css/Events.css";

function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  const eventListings = [
    {
      title: "Tech Conference 2024",
      location: "New York, NY",
      date: "March 15, 2024",
    },
    {
      title: "Web Development Workshop",
      location: "Austin, TX",
      date: "February 10, 2024",
    },
    {
      title: "Data Science Meetup",
      location: "San Francisco, CA",
      date: "April 22, 2024",
    },
    { title: "AI Expo", location: "Los Angeles, CA", date: "May 30, 2024" },
  ];

  const filteredEvents = eventListings.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="events">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <div className="event-listings">
        {filteredEvents.map((event, index) => (
          <EventListing
            key={index}
            title={event.title}
            location={event.location}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
