// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filterDuck';

import './searcher.scss';
import SwitchFilter from '../switchFilter';

interface Props {
  changeFilter: any;
}

class Searcher extends React.Component<Props> {
  stillOnFocus() {
    let element = document.getElementById('searcher');
    element?.focus();
  }

  render() {
    let { changeFilter } = this.props;
    return (
      <label id="searcher" className="input-container">
        <div className="shadow" />
        <div className="center">
          <input
            id="intext"
            type="text"
            className="input"
            placeholder="Search characters/locations"
          />
          <div className="align" onClick={this.stillOnFocus}>
            <SwitchFilter onClick={() => changeFilter()} />
          </div>
        </div>
        <div className="sticks" />
      </label>
    );
  }
}

function mapState(state: any) {
  return {};
}

export default connect(mapState, { changeFilter })(Searcher);
