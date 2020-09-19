// REACT ──────────────────────────────────────────────────────────
import React, { useState, useEffect } from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import {
  activeSidebar,
  changeHiddenStatus,
  changeToggledStatus,
} from '../../redux/sidebarDuck';
import {
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
} from '../../redux/filterDuck';

// SIDEBAR ──────────────────────────────────────────────────────
import {
  ProSidebar,
  SidebarContent,
  Menu,
  SidebarFooter,
} from 'react-pro-sidebar';
import SidebarHeadItem from '../sidebarHeadItem';
import SidebarFootItem from '../sidebarFootItem';
import SidebarMenuItem from '../sidebarMenuItem';

// STYLES & UTILS ─────────────────────────────────────────────────
import { CharIcon, LocationIcon, EpisodesIcon } from '../../utils/icons/Icons';
import Space from '../space';
import '../../utils/styles/sidebar/styles.css';
import './filter.css';

function Filter({
  hiddenStatus,
  toggledStatus,
  activeSidebar,
  changeHiddenStatus,
  changeToggledStatus,
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
  charFilterStatus,
  locationsFilterStatus,
  episodesFilterStatus,
}: any) {
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
      onToggle={() => changeToggledStatus()}
    >
      <SidebarContent>
        <Menu iconShape="circle">
          <SidebarHeadItem
            text="Filter Menu"
            onClick={() => changeHiddenStatus(width)}
          />
          <Space />
          <SidebarMenuItem
            active={charFilterStatus}
            icon={<CharIcon />}
            onClick={() => charFilterActive()}
            text="Characters"
          />
          <SidebarMenuItem
            active={locationsFilterStatus}
            icon={<LocationIcon />}
            onClick={() => locationsFilterActive()}
            text="Locations"
          />
          <SidebarMenuItem
            active={episodesFilterStatus}
            icon={<EpisodesIcon />}
            onClick={() => episodesFilterActive()}
            text="Episodes"
          />
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
    charFilterStatus: state.menuFilter.charsMenuItem,
    locationsFilterStatus: state.menuFilter.locationsMenuItem,
    episodesFilterStatus: state.menuFilter.episodesMenuItem,
  };
}

export default connect(mapState, {
  changeToggledStatus,
  changeHiddenStatus,
  activeSidebar,
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
})(Filter);
