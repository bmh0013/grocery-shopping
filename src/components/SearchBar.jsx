import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      className="search"
      id="search-bar"
      type="text"
      placeholder="Search for items..."
      onChange={(e) => handleSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
