import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        className="user-input"
        id="search-bar"
        type="text"
        placeholder="Search for items..."
        onChange={ e => handleSearch( e.target.value.toLowerCase() ) }
      />
    </div>
  );
};

export default SearchBar;
