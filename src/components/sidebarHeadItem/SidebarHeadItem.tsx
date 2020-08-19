// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES & UTILS ─────────────────────────────────────────────────
import { MenuIcon } from '../../utils/icons/Icons';
import '../../utils/styles/sidebar/styles.css';
import './sidebarHeadItem.css';

interface Props {
  onClick: () => void;
  text?: string;
}

let SidebarHeadItem = ({ onClick, text }: Props) => {
  return (
    <ul className="header-underline" onClick={onClick}>
      <li className="pro-menu-item">
        <div className="pro-inner-item">
          <span className="pro-icon-wrapper">
            <span className="pro-icon">
              <MenuIcon />
            </span>
          </span>
          <span className="pro-item-content headerText">{text}</span>
        </div>
      </li>
    </ul>
  );
};

export default SidebarHeadItem;
