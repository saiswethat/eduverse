import React, { useState } from "react";
import "./css/ProfilePage.css";
import Header from "./Header";
import defaultProfileImage from "./assets/profileImage.jpg";
import { FaPencilAlt } from "react-icons/fa";

function ProfilePage() {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Software developer passionate about web technologies.",
    location: "New York, USA",
    mobile: "123-456-7890",
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

  return (
    <div>
      <Header />
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
            value={formData.name}
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

          <label>Summary</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className={`profile-card__textarea ${
              editMode ? "editable" : "read-only"
            }`}
            placeholder="Your bio"
            readOnly={!editMode}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={`profile-card__input ${
              editMode ? "editable" : "read-only"
            }`}
            readOnly={!editMode}
          />

          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className={`profile-card__input ${
              editMode ? "editable" : "read-only"
            }`}
            readOnly={!editMode}
          />
        </div>

        <div className="profile-card__buttons">
          {!editMode ? (
            <button className="profile-card__edit-btn" onClick={toggleEditMode}>
              Edit Profile
            </button>
          ) : (
            <button className="profile-card__save-btn" onClick={toggleEditMode}>
              Save Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
