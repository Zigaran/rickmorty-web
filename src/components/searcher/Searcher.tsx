import React from 'react';
import './Searcher.css';
import { SearchIcon } from '../../icons/Icons';

let Searcher = () => {
  return (
    <div className="search-container">
      <div id="input-border" tabIndex={0} className="inputcontainer">
        <input
          className="input"
          placeholder="Search for Characters/Location"
          type="text"
        />
      </div>
    </div>
  );
};

export default Searcher;
