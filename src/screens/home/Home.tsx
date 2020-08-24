import React from 'react';
import './home.css';
import { Searcher, MenuButton, ItemData } from '../../components';
import { connect } from 'react-redux';
import { changeToggledStatus } from '../../redux/sidebarDuck';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface Props {
  changeToggledStatus?: any;
  chars?: any;
}

let Home = ({ changeToggledStatus, chars }: Props) => {
  console.log(chars);

  let results = chars.data.map((char: any) => (
    <ItemData name={char.name} image={char.image} />
  ));
  return (
    <div className="home">
      <div className="home-content">
        <MenuButton onClick={() => changeToggledStatus()} />

        <PerfectScrollbar className="home-body">
          <div className="searcher-grid">{<Searcher />}</div>
          {results}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {
    chars: state.characters,
  };
}

export default connect(mapState, { changeToggledStatus })(Home);
