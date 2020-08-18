// REACT ──────────────────────────────────────────────────────────
import React, { useState } from 'react';

// SIDEBAR FILTER ─────────────────────────────────────────────────
import {
  ProSidebar,
  SidebarContent,
  Menu,
  MenuItem,
  SidebarFooter,
} from 'react-pro-sidebar';
import SidebarHeadItem from '../sidebarHeadItem';
import SidebarFootItem from '../sidebarFootItem';

// STYLES & UTILS ─────────────────────────────────────────────────
import { CharIcon, LocationIcon, EpisodesIcon } from '../../icons/Icons';
import Space from '../space';
import '../../styles/sidebar/styles.css';
import './filter.css';

export default function Filter() {
  const [hidden, setHidden] = useState(true);

  return (
    <ProSidebar
      width={30}
      image="https://wallpaperaccess.com/full/795172.jpg"
      collapsed={hidden}
      className="flex"
      breakPoint="md"
    >
      <SidebarContent>
        <Menu iconShape="circle">
          <SidebarHeadItem
            text="Menu Filter"
            onClick={() => setHidden(!hidden)}
          />
          <Space />
          <MenuItem icon={<CharIcon />}>Characters</MenuItem>
          <MenuItem icon={<LocationIcon />}>Locations</MenuItem>
          <MenuItem icon={<EpisodesIcon />}>Episodes</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarFootItem />
      </SidebarFooter>
    </ProSidebar>
  );
}
