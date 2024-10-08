// MemberCard.js
import React from "react";
import './css/MemberCard.css'; // You can create a CSS file for styling

function MemberCard({ name }) {
    return (
        <div className="member-card">
            <div className="member-avatar">
                {/* You can add an avatar image or initials here */}
                <span>{name.charAt(0)}</span> {/* Display first letter of the name */}
            </div>
            <div className="member-name">{name}</div>
        </div>
    );
}

export default MemberCard;
