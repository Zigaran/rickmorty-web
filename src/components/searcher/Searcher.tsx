import React from 'react';
import './searcher.scss';
import SwitchFilter from '../switchFilter';

interface Props {
  e?: any;
}

class Searcher extends React.Component<Props> {
  render() {
    return (
      <label id="searcher" className="input-container trolo">
        <div className="shadow" />
        <div className="center">
          <input
            type="text"
            className="input"
            placeholder="Search characters/locations"
          />
          <div id="switch" style={{ paddingLeft: '4px' }}>
            <SwitchFilter />
          </div>
        </div>
        <div className="sticks" />
      </label>
    );
  }
}

export default Searcher;
