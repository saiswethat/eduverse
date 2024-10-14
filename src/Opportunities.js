import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobListing from "./JobListing";
import "./css/Opportunities.css";

function Opportunities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobListings, setJobListings] = useState([
    {
      title: "Data Analyst",
      company: "PayCom Inc.",
      location: "Boston, VA",
      description: "Data Analyst for Human Resources based applications",
      type:"Full-Time",
      link: "#"
    },
    {
      title: "Graduate Internship",
      company: "Salesforce",
      location: "Dallas, TX",
      description: "New Grad Intern",
      type:"Internship",
      link: "#"
    },
    {
      title: "Software Developer",
      company: "Google",
      location: "Arlington, VA",
      description: "Entry Level Developer",
      type:"Full-Time",
      link: "#"
    },
    {
      title: "Software Development Engineer",
      company: "Microsoft",
      location: "Arlington, VA",
      description: "Developer with minimum one year experience",
      type:"Full-Time",
      link: "#"
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newJob, setNewJob] = useState({ title: "", company: "", location: "", description: "", link: "" });

  const filteredListings = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    setJobListings((prevListings) => prevListings.filter((_, i) => i !== index));
  };

  const handleCreateOpportunity = () => {
    if (!newJob.title || !newJob.company || !newJob.location || !newJob.description || !newJob.link || !newJob.type) {
      alert("Please fill in all fields.");
      return;
    }

    setJobListings((prev) => [...prev, newJob]);
    setModalOpen(false);
    setNewJob({ title: "", company: "", location: "", description: "", link: "" });
  };

  return (
    <>
      <Header />
      <div className="opportunity-opportunities">
        <h2>Opportunities</h2>
        <SearchBar onSearch={setSearchTerm} />
        <button className="create-opportunity-button" onClick={() => setModalOpen(true)}>
          Create Opportunity
        </button>
        <div className="opportunity-job-listings">
          {filteredListings.map((job, index) => (
            <JobListing
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              link={job.link}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
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
              <button onClick={() => setModalOpen(false)} className="opp-cancel-button">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Opportunities;
