import React from "react";
import { useParams } from "react-router-dom";
import "./css/FullTipPage.css";
import { tips, users } from "./loadData";

function FullTipPage() {

    const tipId = useParams().id;

    if (!sessionStorage.getItem("userId")) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }

    const tip = tips.find(t => t.id === parseInt(tipId, 10));
    console.log(tip);

    if (!tip) {
        return <div>Tip not found!</div>;
    }

    return (
        <div className="full-tip-page">
            <h1 className="full-tip-header">{tip.shortDescription}</h1>
            {users[tip.postedBy] ? (
                <span>{`Posted by: ${users[tip.postedBy].user_name} on ${tip.postedDate}`}</span>
            ) : (
                <span>User not found</span>
            )}
            <div className="full-tip-content">
                <p className="full-tip-description">{tip.content}</p>
                <div className="full-tip-details">
                </div>
            </div>
        </div>
    );
}

export default FullTipPage;
