// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { changeHiddenStatus } from '../../redux/sidebarDuck';

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
}

function Filter({ hiddenStatus, toggledStatus, changeHiddenStatus }: Props) {
  // let sidebarResponsiveToggle = () => {
  //   let w = window.innerWidth;
  //   console.log(w);
  //   return w < 769 ? () => changeToggledStatus() : () => changeHiddenStatus();
  // };

  const w = window.innerWidth;
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
            onClick={() => changeHiddenStatus(w)}
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

export default connect(mapState, { changeHiddenStatus })(Filter);
