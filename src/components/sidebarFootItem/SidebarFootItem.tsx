import React from 'react';
import { PuzzleIcon } from '../../icons/Icons';
import './SidebarFootItem.css';

interface Props {
  text?: string;
}

let SidebarFootItem = () => {
  return (
    <div className="container">
      <a
        href="https://thepuzzle.digital/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-icon"
      >
        <PuzzleIcon className="icon" />
        <h6>Puzzle Challenge</h6>
      </a>
    </div>
  );
};

export default SidebarFootItem;
