import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import "./css/ManageOpportunities.css";

const initialOpportunities = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "New York", type: "Internship" },
    { id: 2, title: "Data Analyst", company: "Data Insights", location: "San Francisco", type: "Full-Time" },
    { id: 3, title: "UX Designer", company: "Creative Solutions", location: "Austin", type: "Full-Time" },
];

function ManageOpportunities() {
    const [opportunities, setOpportunities] = useState(initialOpportunities);
    const [isModalOpen, setModalOpen] = useState(false);
    const [newJob, setNewJob] = useState({
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
        link: ""
    });

    if (!sessionStorage.getItem("userId")) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }

    const handleTypeChange = (selectedOption, id) => {
        const updatedOpportunities = opportunities.map((opportunity) =>
            opportunity.id === id ? { ...opportunity, type: selectedOption.value } : opportunity
        );
        setOpportunities(updatedOpportunities);
    };

    const handleDeleteClick = (id) => {
        const updatedOpportunities = opportunities.filter((opportunity) => opportunity.id !== id);
        setOpportunities(updatedOpportunities);
    };

    const handleCreateOpportunity = () => {
        if (!newJob.title || !newJob.company || !newJob.location || !newJob.description || !newJob.link || !newJob.type) {
            alert("Please fill in all fields.");
            return;
        }

        let newId = opportunities.length + 1;

        setOpportunities((prev) => [...prev, { ...newJob, id: newId }]);
        setModalOpen(false);
        setNewJob({ title: "", company: "", location: "", description: "", link: "" });
    };

    const handleCloseModel = () => {
        setModalOpen(false);
        setNewJob({ title: "", company: "", location: "", description: "", link: "" });
    };

    return (
        <>
            <AdminHeader />
            <div className="manage-opportunities">
                <h2>Manage Opportunities</h2>
                <button className="create-opportunity-button" onClick={() => setModalOpen(true)}>
                    Create Opportunity
                </button>
                <table className="opportunity-table">
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {opportunities.map((opportunity) => (
                            <tr key={opportunity.id}>
                                <td>{opportunity.id}</td>
                                <td>{opportunity.title}</td>
                                <td>{opportunity.company}</td>
                                <td>{opportunity.location}</td>
                                <td>{opportunity.type}</td>
                                <td>
                                    <button className="delete-button actions-cell" onClick={() => handleDeleteClick(opportunity.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isModalOpen && (
                    <div className="opp-modal-overlay">
                        <div className="opp-modal-content">
                            <h2>Create Opportunity</h2>
                            <form onSubmit={handleCreateOpportunity}>
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    value={newJob.title}
                                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={newJob.company}
                                    onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                                    required
                                />
                                <select
                                    value={newJob.type}
                                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                                    required
                                >
                                    <option value="">Select Opportunity Type</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Internship">Internship</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={newJob.location}
                                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder="Description"
                                    value={newJob.description}
                                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Job Link"
                                    value={newJob.link}
                                    onChange={(e) => setNewJob({ ...newJob, link: e.target.value })}
                                    required
                                />
                                <button type="submit" className="opp-create-button">Create</button>
                                <button type="button" onClick={handleCloseModel} className="opp-cancel-button">Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ManageOpportunities;