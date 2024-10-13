import React, { useState } from "react";
import "./css/AdminUserRequests.css";
import Admin_Header from "./Admin_header";

const userRequestsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
    message: "I need help with my account.",
    replied: false,
    replyMessage: "",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    phone: "0987654321",
    email: "jane.smith@example.com",
    message: "Can you assist with event registration?",
    replied: false,
    replyMessage: "",
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Brown",
    phone: "4567891234",
    email: "emily.brown@example.com",
    message: "How do I reset my password?",
    replied: false,
    replyMessage: "",
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Johnson",
    phone: "5678912345",
    email: "michael.johnson@example.com",
    message: "Can you help with updating my profile?",
    replied: false,
    replyMessage: "",
  },
  {
    id: 5,
    firstName: "Laura",
    lastName: "Williams",
    phone: "6789123456",
    email: "laura.williams@example.com",
    message: "How can I cancel my event registration?",
    replied: false,
    replyMessage: "",
  }
];


const AdminUserRequests = () => {
  const [requests, setRequests] = useState(userRequestsData);
  const [activeAccordion, setActiveAccordion] = useState(null); // Track which accordion is open

  // Handle reply changes
  const handleReplyChange = (id, value) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, replyMessage: value } : request
      )
    );
  };

  // Handle reply submission
  const handleReplySubmit = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, replied: true } : request
      )
    );
    setActiveAccordion(null); // Close the accordion after reply is sent
  };

  // Handle delete request
  const handleDeleteRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  // Toggle accordion
  const toggleAccordion = (id) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div>
      <Admin_Header />
      <div className="admin-requests-container">
        <h2>User Queries</h2>
        {requests.length === 0 ? (
          <p>No user queries available.</p>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="accordion-card">
              {/* Accordion Header */}
              <div className="accordion-header" onClick={() => toggleAccordion(request.id)}>
                <h3>{`${request.firstName} ${request.lastName}`}</h3>
                <p><strong>Message:</strong> {request.message}</p>
              </div>

              {/* Accordion Content (only visible if the accordion is active) */}
              {activeAccordion === request.id && (
                <div className="accordion-content">
                  <p><strong>Phone:</strong> {request.phone}</p>
                  <p><strong>Email:</strong> {request.email}</p>

                  {request.replied ? (
                    <div className="reply-section">
                      <h4>Reply Sent:</h4>
                      <p>{request.replyMessage}</p>
                    </div>
                  ) : (
                    <div className="reply-section">
                      <textarea
                        placeholder="Type your reply here"
                        value={request.replyMessage}
                        onChange={(e) =>
                          handleReplyChange(request.id, e.target.value)
                        }
                      ></textarea>
                      <button
                        className="reply-btn"
                        onClick={() => handleReplySubmit(request.id)}
                      >
                        Send Reply
                      </button>
                    </div>
                  )}

                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteRequest(request.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminUserRequests;