import React from 'react';
import './home.css';
import { Searcher, MenuButton, ItemData } from '../../components';
import { connect } from 'react-redux';
import { changeToggledStatus } from '../../redux/sidebarDuck';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface Props {
  changeToggledStatus?: any;
}

let Home = ({ changeToggledStatus }: Props) => {
  return (
    <div className="home">
      <div className="home-content">
        <MenuButton onClick={() => changeToggledStatus()} />
        <Searcher />

        <PerfectScrollbar className="home-body">
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
          <ItemData />
        </PerfectScrollbar>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {};
}

export default connect(mapState, { changeToggledStatus })(Home);
