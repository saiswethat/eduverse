import React, { useState } from "react";
import Header from "./Admin_header";
import SearchBar from "./SearchBar"; // Assuming you want to reuse the same SearchBar component
import "./css/Manage_groups.css"; // Import the CSS for the table and layout

// Static group data
const initialGroups = [
  { id: 1, name: "AI Enthusiasts", description: "Group for AI researchers", interests: "Artificial Intelligence, Machine Learning", createdBy: "John Doe" },
  { id: 2, name: "Web Developers", description: "Group for front-end and back-end developers", interests: "React, Node.js, JavaScript", createdBy: "Jane Smith" },
  { id: 3, name: "Data Scientists", description: "Group for data science professionals", interests: "Data Analysis, Python, R", createdBy: "Alice Johnson" },
];

function ManageGroups() {
  const [groups, setGroups] = useState(initialGroups);

  // Delete group handler
  const handleDeleteGroup = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this group?");
    if (confirmDelete) {
      const updatedGroups = groups.filter(group => group.id !== id);
      setGroups(updatedGroups);
    }
  
  };

  return (
    <div className="manage-groups">
      <Header />
      <SearchBar />

      <table className="group-table">
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Group Name</th>
            <th>Description</th>
            <th>Academic Interests</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.id}</td>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td>{group.interests}</td>
              <td>{group.createdBy}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteGroup(group.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageGroups;
