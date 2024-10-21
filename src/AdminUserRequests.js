import React, { useState } from "react";
import "./css/AdminUserRequests.css";
import AdminHeader from "./AdminHeader";
import { userRequestsData } from "./loadData";

const AdminUserRequests = () => {
  const [requests, setRequests] = useState(userRequestsData);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!sessionStorage.getItem("userId")) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }
  
  const handleReplyChange = (id, value) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, replyMessage: value } : request
      )
    );
  };

  const handleReplySubmit = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, replied: true } : request
      )
    );
    setActiveAccordion(null);
  };

  const handleDeleteRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const toggleAccordion = (id) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-requests-container">
        <h2>User Queries</h2>
        {requests.length === 0 ? (
          <p>No user queries available.</p>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="accordion-card">
              <div className="accordion-header" onClick={() => toggleAccordion(request.id)}>
                <h3>{`${request.firstName} ${request.lastName}`}</h3>
                <p><strong>Message:</strong> {request.message}</p>
              </div>
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
                        onChange={(e) => handleReplyChange(request.id, e.target.value)}
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