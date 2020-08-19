import React from 'react';
import './home.css';
import { Searcher, Filter, MenuButton } from '../../components';
import { connect } from 'react-redux';
import { changeToggledStatus } from '../../redux/sidebarDuck';

interface Props {
  changeToggledStatus?: any;
}

let Home = ({ changeToggledStatus }: Props) => {
  return (
    <div className="home">
      <Filter />
      <div className="home-content">
        <MenuButton onClick={() => changeToggledStatus()} />
        <Searcher />
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {};
}

export default connect(mapState, { changeToggledStatus })(Home);
