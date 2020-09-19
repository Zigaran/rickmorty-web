// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { changeToggledStatus } from '../../redux/sidebarDuck';
import { clearData } from '../../redux/charsDuck';

// COMPONENTS ─────────────────────────────────────────────────────
import {
  Searcher,
  MenuButton,
  ItemData,
  Loader,
  ModalPopup,
  PageButton,
} from '../../components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import swal from 'sweetalert';

// STYLES ──────────────────────────────────────────────────────────
import 'react-perfect-scrollbar/dist/css/styles.css';
import './home.css';

interface Props {
  changeToggledStatus?: any;
  clearData?: any;
  loading?: boolean;
  error?: any;
  chars?: any;
}

let Home = ({
  changeToggledStatus,
  clearData,
  chars,
  loading,
  error,
}: Props) => {
  if (error) {
    swal('Sorry :(', 'Not Found', 'error').then(clearData());
  }

  let results = chars.data.map((char: any) => (
    <ItemData
      name={char.name}
      image={char.image}
      dimension={char.dimension}
      episode={char.episode}
      key={char.id}
      actualObject={char}
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
          <PageButton />
        </PerfectScrollbar>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {
    chars: state.characters,
    error: state.characters.error,
    loading: state.characters.fetching,
  };
}

export default connect(mapState, { changeToggledStatus, clearData })(Home);
