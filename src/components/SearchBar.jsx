import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        className="user-input"
        type="text"
        placeholder="Search for items..."
        onChange={ e => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
