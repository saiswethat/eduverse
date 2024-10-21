import React, { useState } from 'react';
import './css/ViewYourMentees.css';
import Header from './Header';
import { FaTrashAlt } from 'react-icons/fa';
import SearchBar from './SearchBar';

const ViewYourMentees = () => {
  const [mentees, setMentees] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      reason: 'I need help with career guidance.',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      reason: 'Looking for support in coding interviews.',
    },
    {
      id: 3,
      studentName: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '555-654-7890',
      reason: 'Want to improve my communication skills.',
    },
    {
      id: 4,
      studentName: 'Emily Clark',
      email: 'emily@example.com',
      phone: '222-333-4444',
      reason: 'Need advice on job applications.',
    },
    {
      id: 5,
      studentName: 'Michael Brown',
      email: 'michael@example.com',
      phone: '888-777-6666',
      reason: 'Seeking guidance on internships.',
    },
    {
      id: 6,
      studentName: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '444-555-6666',
      reason: 'Want to develop networking skills. Want to develop networking skills. Want to develop networking skills. Want to develop networking skills. Want to develop networking skills. Want to develop networking skills. Want to develop networking skills.',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  if (!sessionStorage.getItem("userId")) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }

  const handleDelete = (id) => {
    var confirmDelete = window.confirm("Do you want to remove this student ?");
    if (confirmDelete) {
      setMentees(mentees.filter((mentee) => mentee.id !== id));
    }
  };
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };


  return (

    <>
      <Header />
      <div className="mentees-container">
        <h2 className="mentees-heading">Your Mentees</h2>
        <SearchBar onSearch={handleSearch} />
        {mentees.length > 0 ? (
          <div className="mentees-list">
            {mentees.map((mentee) => (
              <div key={mentee.id} className="mentee-card">
                <div className="mentee-card-content">
                  <div className="mentee-left">
                    <div className="mentee-icon">
                      {mentee.studentName.charAt(0).toUpperCase()}
                    </div>
                    <div className="mentee-info">
                      <p><strong>Name:</strong> {mentee.studentName}</p>
                      <p><strong>Email:</strong> {mentee.email}</p>
                    </div>
                  </div>

                  <div className="mentee-right">
                    <p><strong>Phone:</strong> {mentee.phone}</p>
                    <div className="mentee-actions">
                      <FaTrashAlt
                        className="delete-icon"
                        onClick={() => handleDelete(mentee.id)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mentee-reason">
                  <p><strong>Reason:</strong> {mentee.reason}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Message to show when there are no mentees
          <p className="no-mentees-message">You currently have no mentees assigned.</p>
        )}
      </div>
    </>
  );


};

export default ViewYourMentees;
