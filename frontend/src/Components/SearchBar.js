import React from 'react';
import '../App.css';
import SortDropdown from './SortDropdown'; // Import SortDropdown component

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-sort-container"> 
      <input
        className="search-bar" 
        type="text"
        placeholder="Search by name or location..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
