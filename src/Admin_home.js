import React from "react";
import "./css/AdvisorHomePage.css";
import Admin_Header from "./Admin_header";

function Admin_home() {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }

    return (
        <>
            <Admin_Header />
            <div className="home-home-page text-home-center">
                <div className="home-welcome-section">
                    <h1 className="home-welcome-title">Welcome to Your Admin Dashboard</h1>
                    <p className="home-welcome-message">
                        As an admin on EduVerse, you play a crucial role in managing the platform. Here, you can oversee users, manage content, and facilitate events that enhance the community experience.
                    </p>
                    <div className="home-additional-content">
                        <p>What you can do:</p>
                        <ul>
                            <li><strong>Assign Roles:</strong> Assign roles to newly added users in the user requests section.</li>
                            <li><strong>Answer User Questions:</strong> Respond to inquiries submitted through the Contact Us form.</li>
                            <li><strong>Manage Resources:</strong> Oversee all resources, events, and opportunities available on the platform.</li>
                            <li><strong>Manage User Credentials:</strong> Update or reset user credentials as necessary.</li>
                            <li><strong>Connect via Chat:</strong> Communicate with users and other admins through the chat feature.</li>
                        </ul>
                    </div>
                </div>

                <div className="home-home-section home-quick-links">
                    <h2 className="home-h2">Quick Links</h2>
                    <div className="home-link-card">
                        <p><a href="/chats">Chat</a></p>
                        <p><a href="/manage-events">Manage Events</a></p>
                        <p><a href="/manage-forums">Manage Forums</a></p>
                        <p><a href="/manage-groups">Manage Groups</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin_home;