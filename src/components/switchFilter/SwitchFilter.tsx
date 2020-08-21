// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES & UTILS ─────────────────────────────────────────────────
import './switchFilter.css';

let SwitchFilter = () => {
  return (
    <label className="switch">
      <input type="checkbox" id="togBtn" />

      <div className="slider round" />
    </label>
  );
};

export default SwitchFilter;
