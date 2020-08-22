import React from 'react';
import './menuButton.css';
import { MenuIcon } from '../../utils/icons/Icons';

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
