import React, { useState } from "react";
import "./css/ManageTips.css"; 
import Admin_Header from "./Admin_header";
import {tips as initialTips} from "./loadData";

function ManageTips() {
    const [tips, setTips] = useState(initialTips);

    const handleDeleteClick = (id) => {
        const updatedTips = tips.filter(tip => tip.id !== id);
        setTips(updatedTips);
    };

    return (
        <>
            <Admin_Header />
            <div className="manage-tips">
                <h2>Manage Tips</h2>

                <table className="tips-table">
                    <thead>
                        <tr>
                            <th>Tip ID</th>
                            <th>Short Description</th>
                            <th>Content</th>
                            <th>Posted By</th>
                            <th>Posted Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tips.map(tip => (
                            <tr key={tip.id}>
                                <td>{tip.id}</td>
                                <td>{tip.shortDescription}</td>
                                <td>{tip.content}</td>
                                <td>{tip.postedBy}</td>
                                <td>{tip.postedDate}</td>
                                <td className="actions-cell">
                                    <button className="delete-button" onClick={() => handleDeleteClick(tip.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ManageTips;