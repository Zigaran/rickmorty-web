// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES & UTILS ─────────────────────────────────────────────────
import './switchFilter.css';

interface Props {
  onClick: () => void;
}

let SwitchFilter = ({ onClick }: Props) => {
  return (
    <label className="switch">
      <input type="checkbox" id="togBtn" />
      <div className="slider round" onClick={onClick} />
    </label>
  );
};

export default SwitchFilter;
