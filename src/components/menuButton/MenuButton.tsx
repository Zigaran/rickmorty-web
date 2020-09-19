// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES & UTILS ─────────────────────────────────────────────────
import { MenuIcon } from '../../utils/icons/Icons';
import './menuButton.css';

interface Props {
  onClick?: () => void;
}

let MenuButton = ({ onClick }: Props) => {
  return (
    <div className="button-container" onClick={onClick}>
      <div className="wrapp-menu-icon">
        <MenuIcon />
      </div>
    </div>
  );
};

export default MenuButton;
