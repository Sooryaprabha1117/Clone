import React, { useState } from "react";
import "./SearchBar.css"; // Add your styling here
import search from "./asset1/search.png"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
        <img id="img" src={search}/>
      <input
       
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
