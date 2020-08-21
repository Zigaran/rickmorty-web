// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES & UTILS ─────────────────────────────────────────────────
import './switchFilter.css';

let SwitchFilter = () => {
  return (
    <div style={{ marginTop: '2px' }}>
      <label className="switch">
        <input type="checkbox" id="togBtn" />

        <div className="slider round" />
      </label>
    </div>
  );
};

export default SwitchFilter;
