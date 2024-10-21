import React, { useState } from "react";
import "./css/ManageEvents.css";
import AdminHeader from "./AdminHeader";
import EventModal from "./EventModal";

const initialEvents = [
    { id: 1, title: "Tech Conference", date: "2024-10-12", location: "New York", time: "09:00 AM" },
    { id: 2, title: "Career Fair", date: "2024-11-05", location: "Dallas", time: "10:30 AM" },
    { id: 3, title: "Workshop on AI", date: "2024-12-15", location: "Austin", time: "02:00 PM" },
];

function ManageEvents() {
    const [events, setEvents] = useState(initialEvents);
    const [isModalOpen, setModalOpen] = useState(false);

    if (!sessionStorage.getItem("userId")) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }

    const handleCreateEvent = (newEvent) => {
        const newId = events.length + 1;
        setEvents([...events, { id: newId, ...newEvent }]);
    };

    const handleDeleteClick = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    return (
        <>
            <AdminHeader />
            <div className="manage-events">
                <h2>Manage Events</h2>
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
