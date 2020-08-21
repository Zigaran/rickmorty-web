// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// SIDEBAR FILTER ─────────────────────────────────────────────────
import { MenuItem } from 'react-pro-sidebar';

// STYLES & UTILS ─────────────────────────────────────────────────
import { CircleIcon } from '../../utils/icons/Icons';
import '../../utils/styles/sidebar/styles.css';

interface Props {
  text: string;
  icon: object;
  active: boolean;
  onClick: () => void;
}

let SidebarMenuItem = ({ text, icon, active, onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <MenuItem
        icon={icon}
        active={active}
        suffix={active ? <CircleIcon /> : null}
      >
        {text}
      </MenuItem>
    </div>
  );
};

export default SidebarMenuItem;
