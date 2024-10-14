import React, { useState } from "react";
import "./css/Manage_forums.css";
import { forums as initialForums, users } from "./loadData";
import Admin_Header from "./Admin_header";

function ManageForums() {
  const [forums, setForums] = useState(initialForums);

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this forum?")) {
      const updatedForums = forums.filter((forum) => forum.forum_id !== id);
      setForums(updatedForums);
    }
  };

  return (
    <>
      <Admin_Header />
      <div className="manage-forums">
        <h2>Manage Forums</h2>
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
              <tr key={forum.forum_id}>
                <td>{forum.forum_id}</td>
                <td>{forum.forum_name}</td>
                <td>{forum.forum_description}</td>
                <td>{users[forum.created_by].user_name}</td>
                <td >
                  <button className="delete-button actions-cell" onClick={() => handleDeleteClick(forum.forum_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageForums;
