// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filterDuck';
import { getInput } from '../../redux/charsDuck';

// STYLES & COMPONENTS ─────────────────────────────────────────────
import SwitchFilter from '../switchFilter';
import './searcher.scss';

interface Props {
  changeFilter?: any;
  getInput: any;
  filterType?: boolean;
  charFilter?: boolean;
  locationFilter?: boolean;
  byNameOrType?: string;
  entitie?: string;
  inputValue?: string;
}

class Searcher extends React.Component<Props> {
  stillOnFocus() {
    let element = document.getElementById('searcher');
    element?.focus();
  }

  render() {
    let {
      changeFilter,
      filterType,
      byNameOrType,
      charFilter,
      locationFilter,
      entitie,
      getInput,
      inputValue,
    } = this.props;
    filterType ? (byNameOrType = 'name') : (byNameOrType = 'type');
    charFilter
      ? (entitie = 'characters')
      : locationFilter
      ? (entitie = 'locations')
      : (entitie = 'episodes');
    return (
      <label id="searcher" className="input-container">
        <div className="shadow" />
        <div className="center">
          <input
            id="intext"
            type="text"
            className="input"
            placeholder={`search ${entitie} by ${byNameOrType}...`}
            onChange={(event) => getInput(event.target.value)}
            value={inputValue}
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
  return {
    filterType: state.menuFilter.byName,
    charFilter: state.menuFilter.charsMenuItem,
    locationFilter: state.menuFilter.locationsMenuItem,
    inputValue: state.characters.input,
  };
}

export default connect(mapState, { changeFilter, getInput })(Searcher);
