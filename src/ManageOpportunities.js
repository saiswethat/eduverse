import React, { useState } from "react";
import Select from "react-select";
import Header from "./Admin_header";
import "./css/ManageOpportunities.css"; // Import the CSS for the table and layout
import SearchBar from "./SearchBar";

// Initial opportunities data
const initialOpportunities = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "New York", type: "Internship" },
    { id: 2, title: "Data Analyst", company: "Data Insights", location: "San Francisco", type: "Full-Time" },
    { id: 3, title: "UX Designer", company: "Creative Solutions", location: "Austin", type: "Full-Time" },
];

// Dropdown options for opportunity types
const typeOptions = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },
];

function ManageOpportunities() {
    const [opportunities, setOpportunities] = useState(initialOpportunities);
    const [editRowId, setEditRowId] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false); 
    const [newJob, setNewJob] = useState({
        title: "",
        company: "",
        location: "",
        type: "",
    });

    // Handle input change for the type field
    const handleTypeChange = (selectedOption, id) => {
        const updatedOpportunities = opportunities.map((opportunity) =>
            opportunity.id === id ? { ...opportunity, type: selectedOption.value } : opportunity
        );
        setOpportunities(updatedOpportunities);
    };

    // Handle delete click to remove an opportunity
    const handleDeleteClick = (id) => {
        const updatedOpportunities = opportunities.filter((opportunity) => opportunity.id !== id);
        setOpportunities(updatedOpportunities);
    };

    // Handle form submission for new opportunity
    const handleCreateOpportunity = () => {
        if (!newJob.title || !newJob.company || !newJob.location || !newJob.description || !newJob.link || !newJob.type) {
            alert("Please fill in all fields.");
            return;
        }

        let newId = opportunities.length + 1;

        setOpportunities((prev) => [...prev,{...newJob, id:newId}]);
        setModalOpen(false);
        setNewJob({ title: "", company: "", location: "", description: "", link: "" });
    };

    const handleCloseModel = () => {
        setModalOpen(false);
        setNewJob({ title: "", company: "", location: "", description: "", link: "" });
    };



    return (
        <>
            <Header />
            <div className="manage-opportunities">
                <h2>Manage Opportunities</h2> 

                {/* Button to open modal for creating new opportunity */}
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
                                <td>
                                    {editRowId === opportunity.id ? (
                                        <Select
                                            value={opportunity.type ? typeOptions.find(option => option.value === opportunity.type) : { value: "", label: "Select" }}
                                            onChange={(selectedOption) => handleTypeChange(selectedOption, opportunity.id)}
                                            options={[{ value: "", label: "Select" }, ...typeOptions]}
                                        />
                                    ) : (
                                        opportunity.type || "No Type Assigned"
                                    )}
                                </td>
                                <td className="actions-cell">
                                    <button className="delete-button" onClick={() => handleDeleteClick(opportunity.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal for creating new opportunity */}
                {isModalOpen && (
                    <div className="opp-modal-overlay">
                        <div className="opp-modal-content">
                            <h2>Create Opportunity</h2>
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
                                <option value="">Select Opportunity Type</option> {/* Placeholder option */}
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
                            <button onClick={handleCreateOpportunity} className="opp-create-button">Create</button>
                            <button onClick={handleCloseModel} className="opp-cancel-button">Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ManageOpportunities;
