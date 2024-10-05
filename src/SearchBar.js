import React, { useState } from "react";
import "./css/SearchBar.css"; // Updated CSS file name

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); // Clear the search result
  };

  return (
    <div className="searchBar-search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={handleInputChange}
      />
      {searchTerm && (
        <span className="searchBar-clear-icon" onClick={clearSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#aaa"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5a.5.5 0 0 1 .707 0L8 7.293l5.793-5.793a.5.5 0 0 1 .707.707L8.707 8l5.793 5.793a.5.5 0 0 1-.707.707L8 8.707l-5.793 5.793a.5.5 0 0 1-.707-.707L7.293 8 1.5 2.207a.5.5 0 0 1 0-.707z" />
          </svg>
        </span>
      )}
      <button className="searchBar-search-button">🔍</button>
    </div>
  );
}

export default SearchBar;
