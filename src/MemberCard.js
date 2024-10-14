
import React from "react";
import './css/MemberCard.css'; 

function MemberCard({ name }) {
    return (
        <div className="member-card">
            <div className="member-avatar">
                <span>{name.charAt(0)}</span> 
            </div>
            <div className="member-name">{name}</div>
        </div>
    );
}

export default MemberCard;
