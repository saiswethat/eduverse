import React, { useState } from "react";
import "./css/ProfilePage.css";
import Header from "./Header";
import defaultProfileImage from "./assets/profileImage.jpg";
import { FaPencilAlt } from "react-icons/fa";
import { users } from "./loadData";
import AdminHeader from "./AdminHeader";

function ProfilePage() {
  const userId = sessionStorage.getItem("userId");
  if (!userId) {
    alert("Please login to continue");
    window.location.href = "/login";
  }
  const currentUser = users[userId];
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    ...currentUser,
    academic_interests: "Enter your academic interests.",
    research_interests: "Enter your research interests."
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleProfileEdit = (e) => {
    e.preventDefault(); 
    if (!/^\d{10}$/.test(formData.phone_number)) {
      alert("Phone number must be 10 digits.");
      return; 
    }
    setEditMode(false);
    alert("Profile saved successfully!"); 
  };

  return (
    <div>
      {(currentUser.user_type === "Admin") ? <AdminHeader /> : <Header />}
      <div className="profile-card">
        <div className="profile-card__image">
          <img src={profileImage} alt="Profile" />

          <div className="profile-card__icon">
            <FaPencilAlt
              onClick={() => document.getElementById("imageUpload").click()}
            />
          </div>

          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            onChange={handleProfileImageChange}
            style={{ display: "none" }}
          />
        </div>

        <div className="profile-card__info">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.user_name}
            readOnly
            className="profile-card__input"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="profile-card__input"
          />

          <label>User Role</label>
          <input
            type="text"
            name="user_type"
            value={formData.user_type}
            readOnly
            className="profile-card__input"
          />

          <label>Academic Interests</label>
          <textarea
            name="academic_interests"
            value={formData.academic_interests}
            onChange={handleInputChange}
            className={`profile-card__textarea ${editMode ? "editable" : "read-only"}`}
            placeholder="Your academic interests"
            readOnly={!editMode}
          />

          <label>Research Interests</label>
          <textarea
            name="research_interests"
            value={formData.research_interests}
            onChange={handleInputChange}
            className={`profile-card__textarea ${editMode ? "editable" : "read-only"}`}
            placeholder="Your research interests"
            readOnly={!editMode}
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            className={`profile-card__input ${editMode ? "editable" : "read-only"}`}
            readOnly={!editMode}
          />
        </div>

        <div className="profile-card__buttons">
          {!editMode ? (
            <button className="profile-card__edit-btn" onClick={toggleEditMode}>
              Edit Profile
            </button>
          ) : (
            <button className="profile-card__save-btn" onClick={handleProfileEdit}>
              Save Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;