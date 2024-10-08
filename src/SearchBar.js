import React, { useState } from "react";
import "./css/SearchBar.css"; // Updated CSS file name

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="searchBar-search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={handleInputChange}
      />
      <button className="searchBar-search-button">🔍</button>
    </div>
  );
}

export default SearchBar;
