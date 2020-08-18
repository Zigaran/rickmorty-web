import React from 'react';
import './searcher.scss';
// import { SearchIcon } from '../../icons/Icons';

// .addEventListener('click', ({ e }: any) => {
//   e.stopPropagation();
//   e.preventDefault();

//   document.querySelector('.input-container').blur();
// });
// }

interface Props {
  e?: any;
}

class Searcher extends React.Component<Props> {
  componentDidMount() {
    document.getElementById('pedo')?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
  }

  render() {
    return (
      <label className="input-container closed">
        <div className="shadow"></div>
        <div className="center">
          <input
            type="text"
            className="input"
            placeholder="Search characters/locations"
          />
        </div>
        <div className="sticks" id="pedo"></div>
      </label>
    );
  }
}

export default Searcher;
