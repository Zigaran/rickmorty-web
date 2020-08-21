import React from 'react';
import './searcher.scss';
import SwitchFilter from '../switchFilter';

interface Props {
  e?: any;
}

class Searcher extends React.Component<Props> {
  stillOnFocus() {
    let element = document.getElementById('searcher');
    element?.focus();
  }

  render() {
    return (
      <label id="searcher" className="input-container trolo">
        <div className="shadow" />
        <div className="center">
          <input
            id="intext"
            type="text"
            className="input"
            placeholder="Search characters/locations"
          />
          <div
            onClick={this.stillOnFocus}
            id="switch"
            style={{ paddingLeft: '4px' }}
          >
            <SwitchFilter />
          </div>
        </div>
        <div className="sticks" />
      </label>
    );
  }
}

export default Searcher;
