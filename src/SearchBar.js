import React from "react";
import "./css/SearchBar.css";

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-button">🔍</button>
    </div>
  );
}

export default SearchBar;
