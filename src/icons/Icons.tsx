// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES ─────────────────────────────────────────────────────────
import './styles.css';

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
  return <i className="fas fa-map-marker-alt fa-2x" />;
};

export let EpisodesIcon = () => {
  return <i className="fas fa-book fa-lg fa-2x" />;
};

export let PuzzleIcon = ({ className }: Props) => {
  return <i className={`fas fa-puzzle-piece fa-xl ${className}`} />;
};
