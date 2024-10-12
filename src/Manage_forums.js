import React, { useState } from "react";
import Header from "./Admin_header";
import "./css/Manage_forums.css"; // Import the CSS for forums layout
import SearchBar from "./SearchBar";

const initialForums = [
  { id: 1, name: "General Discussion", description: "A place to talk about anything", createdBy: "Admin" },
  { id: 2, name: "Study Resources", description: "Share and discuss academic resources", createdBy: "John Doe" },
  { id: 3, name: "Career Advice", description: "Get advice on career-related topics", createdBy: "Jane Smith" },
];

function ManageForums() {
  const [forums, setForums] = useState(initialForums);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this forum?")) {
      const updatedForums = forums.filter((forum) => forum.id !== id);
      setForums(updatedForums);
    }
  };

  return (
    <div className="manage-forums">
      <Header />
      <SearchBar onSearch={setSearchTerm} />

      <table className="forum-table">
        <thead>
          <tr>
            <th>Forum ID</th>
            <th>Forum Name</th>
            <th>Forum Description</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forums.map((forum) => (
            <tr key={forum.id}>
              <td>{forum.id}</td>
              <td>{forum.name}</td>
              <td>{forum.description}</td>
              <td>{forum.createdBy}</td>
              <td className="actions-cell">
                <button className="delete-button" onClick={() => handleDeleteClick(forum.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageForums;
