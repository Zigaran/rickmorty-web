import React from 'react';
import './menuButton.css';
import { MenuIcon } from '../../utils/icons/Icons';

interface Props {
  onClick?: () => void;
}

let MenuButton = ({ onClick }: Props) => {
  return (
    <div className="button-container" onClick={onClick}>
      <MenuIcon />
    </div>
  );
};

export default MenuButton;
