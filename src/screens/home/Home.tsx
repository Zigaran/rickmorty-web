import React from 'react';
import './home.css';
import {
  Searcher,
  MenuButton,
  ItemData,
  Loader,
  ModalPopup,
} from '../../components';
import { connect } from 'react-redux';
import { changeToggledStatus } from '../../redux/sidebarDuck';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface Props {
  changeToggledStatus?: any;
  loading?: boolean;
  chars?: any;
}

let Home = ({ changeToggledStatus, chars, loading }: Props) => {
  console.log(chars);

  let results = chars.data.map((char: any, i: any) => (
    <ItemData
      name={char.name}
      image={char.image}
      dimension={char.dimension}
      episode={char.episode}
      key={i}
    />
  ));
  return (
    <div className="home">
      <ModalPopup />
      <div className="home-content">
        <MenuButton onClick={() => changeToggledStatus()} />
        <PerfectScrollbar className="home-body">
          <div className="searcher-grid">{<Searcher />}</div>
          {loading ? (
            <div className="searcher-grid">
              <Loader />
            </div>
          ) : (
            results
          )}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {
    chars: state.characters,
    loading: state.characters.fetching,
  };
}

export default connect(mapState, { changeToggledStatus })(Home);
