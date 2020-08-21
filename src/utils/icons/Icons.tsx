// REACT ──────────────────────────────────────────────────────────
import React from 'react';

interface Props {
  className?: string;
}

export let MenuIcon = () => {
  return <i className="fas fa-bars fa-lg" />;
};

export let CharIcon = () => {
  return <i className="fas fa-user-astronaut fa-2x" />;
};

export let LocationIcon = () => {
  return <i className="fas fa-rocket fa-2x" />;
};

export let EpisodesIcon = () => {
  return <i className="fas fa-book fa-lg fa-2x" />;
};

export let PuzzleIcon = ({ className }: Props) => {
  return <i className={`fas fa-puzzle-piece fa-xl ${className}`} />;
};

export let SearchIcon = () => {
  return <i className="fas fa-search" />;
};

export let CircleIcon = () => {
  return <i className="fas fa-circle" style={{ fontSize: '8px' }} />;
};
