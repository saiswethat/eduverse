import React, { useState } from "react";
import Select from "react-select";
import Header from "./AdminHeader";
import "./css/ManageUsers.css";
import SearchBar from "./SearchBar";

const initialUsers = [
  { id: 1, name: "John Doe", email: "A@gmail.com", phone: "123-456-7890", role: "" },
  { id: 2, name: "Jane Smith", email: "B@gmail.com", phone: "987-654-3210", role: "Mentor" },
  { id: 3, name: "Alice Johnson", email: "C@gmail.com", phone: "555-123-4567", role: "Advisor" },
];

const roleOptions = [
  { value: "Advisor", label: "Advisor" },
  { value: "Mentor", label: "Mentor" },
  { value: "Student", label: "Student" },
];

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [editRowId, setEditRowId] = useState(null);

  if (!sessionStorage.getItem("userId")) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }

  const handleEditClick = (id) => {
    setEditRowId(id);
  };

  const handleSaveClick = () => {
    setEditRowId(null);
  };

  const handleRoleChange = (selectedOption, id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: selectedOption.value } : user
    );
    setUsers(updatedUsers);
  };

  const handleDeleteClick = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleResetLinkClick = (email) => {
    alert(`Reset link has been sent to ${email}`);
  };

  return (
    <>
      <Header />
      <div className="manage-users">
        <h2>Manage Users</h2>
        <SearchBar />
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {editRowId === user.id ? (
                    <Select
                      value={user.role ? roleOptions.find(option => option.value === user.role) : { value: "", label: "Select" }}
                      onChange={(selectedOption) => handleRoleChange(selectedOption, user.id)}
                      options={[{ value: "", label: "Select" }, ...roleOptions]}
                    />
                  ) : (
                    user.role || "No Role Assigned"
                  )}
                </td>
                <td className="actions-cell">
                  {editRowId === user.id ? (
                    <button className="save-button" onClick={handleSaveClick}>Save</button>
                  ) : (
                    <button className="edit-button" onClick={() => handleEditClick(user.id)}>Edit</button>
                  )}
                  <button className="delete-button" onClick={() => handleDeleteClick(user.id)}>Delete</button>
                  <button className="reset-button" onClick={() => handleResetLinkClick(user.email)}>Reset Link</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManageUsers;