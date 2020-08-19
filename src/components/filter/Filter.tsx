// REACT ──────────────────────────────────────────────────────────
import React, { useState, useEffect } from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { activeSidebar, changeHiddenStatus } from '../../redux/sidebarDuck';

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
import { CharIcon, LocationIcon, EpisodesIcon } from '../../utils/icons/Icons';
import Space from '../space';
import '../../utils/styles/sidebar/styles.css';
import './filter.css';

interface Props {
  hiddenStatus?: any;
  toggledStatus?: any;
  changeHiddenStatus?: any;
  activeSidebar?: any;
}

function Filter({
  hiddenStatus,
  toggledStatus,
  activeSidebar,
  changeHiddenStatus,
}: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resizeSidebar);
  });

  let resizeSidebar = () => {
    let w = window.innerWidth;
    setWidth(w);
    return w < 769 ? activeSidebar() : null;
  };

  return (
    <ProSidebar
      width={30}
      image="https://wallpaperaccess.com/full/795172.jpg"
      collapsed={hiddenStatus}
      className="flex"
      breakPoint="md"
      toggled={toggledStatus}
    >
      <SidebarContent>
        <Menu iconShape="circle">
          <SidebarHeadItem
            text="Menu Filter"
            onClick={() => changeHiddenStatus(width)}
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

function mapState(state: any) {
  return {
    hiddenStatus: state.sidebarStatuses.hidden,
    toggledStatus: state.sidebarStatuses.toggled,
  };
}

export default connect(mapState, { changeHiddenStatus, activeSidebar })(Filter);
