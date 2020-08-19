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

interface Props {
  active?: boolean;
}

export default function Filter({ active }: Props) {
  let [hidden, setHidden] = useState(false);
  let [toggled, setToggle] = useState(false);

  let widthToClose = () => {
    const w = window.innerWidth;
    return w < 769
      ? (console.log('menor'), setHidden(false), setToggle(!toggled))
      : (console.log('mayor'), setHidden(!hidden));
  };

  return (
    <ProSidebar
      width={30}
      image="https://wallpaperaccess.com/full/795172.jpg"
      collapsed={hidden}
      className="flex"
      breakPoint="md"
      toggled={toggled ? !toggled : active}
    >
      <SidebarContent>
        <Menu iconShape="circle">
          <SidebarHeadItem text="Menu Filter" onClick={() => widthToClose()} />
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
