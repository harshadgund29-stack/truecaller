import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or number..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;