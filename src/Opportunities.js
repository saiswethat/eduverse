import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobListing from "./JobListing";
import "./css/Opportunities.css"; // Updated CSS file name

function Opportunities() {
  const [searchTerm, setSearchTerm] = useState("");

  const jobListings = [
    { title: "Data Analyst", company: "PayCom Inc.", location: "Boston, VA" },
    {
      title: "Graduate Internship",
      company: "Salesforce",
      location: "Dallas, TX",
    },
    {
      title: "Software Developer",
      company: "Google",
      location: "Arlington, VA",
    },
    {
      title: "Software Development Engineer",
      company: "Microsoft",
      location: "Arlington, VA",
    },
  ];

  const filteredListings = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="opportunity-opportunities">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <div className="opportunity-job-listings">
        {filteredListings.map((job, index) => (
          <JobListing
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
