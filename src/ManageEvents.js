import React, { useState } from "react";
import "./css/ManageEvents.css"; // Import the CSS for styling
import Admin_Header from "./Admin_header";
import EventModal from "./EventModal";

// Initial events data
const initialEvents = [
    { id: 1, title: "Tech Conference", date: "2024-10-12", location: "New York", time: "09:00 AM" },
    { id: 2, title: "Career Fair", date: "2024-11-05", location: "Dallas", time: "10:30 AM" },
    { id: 3, title: "Workshop on AI", date: "2024-12-15", location: "Austin", time: "02:00 PM" },
];

function ManageEvents() {
    const [events, setEvents] = useState(initialEvents);
    const [isModalOpen, setModalOpen] = useState(false);

    // Handle form submission for creating a new event
    const handleCreateEvent = (newEvent) => {
        const newId = events.length + 1; 
        setEvents([...events, { id: newId, ...newEvent }]);
    };

    // Handle delete click to remove an event
    const handleDeleteClick = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    return (
        <>
            <Admin_Header />
            <div className="manage-events">
                <h2>Manage Events</h2>

                {/* Button to open modal for creating new event */}
                <button className="create-event-button" onClick={() => setModalOpen(true)}>
                    Create Event
                </button>

                <table className="event-table">
                    <thead>
                        <tr>
                            <th>Event ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.title}</td>
                                <td>{event.date}</td>
                                <td>{event.time}</td>
                                <td>{event.location}</td>
                                <td className="actions-cell">
                                    <button className="delete-button" onClick={() => handleDeleteClick(event.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <EventModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onCreate={handleCreateEvent}
                />
            </div>
        </>
    );
}

export default ManageEvents;