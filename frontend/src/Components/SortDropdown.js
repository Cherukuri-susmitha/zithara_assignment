import React from 'react';
import '../App.css'; // Import your CSS file

const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="date-time-container"> 
      <select className="date-input" value={value} onChange={onChange}> 
        <option value="date_asc">Date (Ascending)</option>
        <option value="date_desc">Date (Descending)</option>
        <option value="time_asc">Time (Ascending)</option>
        <option value="time_desc">Time (Descending)</option>
      </select>
    </div>
  );
};

export default SortDropdown;
