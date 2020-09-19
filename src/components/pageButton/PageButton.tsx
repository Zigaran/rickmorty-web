// REACT ──────────────────────────────────────────────────────────
import React, { useEffect } from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { getMeTheData } from '../../redux/charsDuck';

// STYLES ─────────────────────────────────────────────────────────
import './pageButton.css';

interface Props {
  error?: any;
  input?: any;
  fetching?: boolean;
  prev?: any;
  next?: any;
  getMeTheData?: any;
}

let PageButton = ({
  error,
  input,
  fetching,
  prev,
  next,
  getMeTheData,
}: Props) => {
  let prevButton = document.getElementById('prev');
  let nextButton = document.getElementById('next');

  useEffect(() => {
    if (!(input.length > 2) || error) {
      prevButton?.classList.add('prev-display');
      nextButton?.classList.add('next-display');
    }
  });

  if (prev != null && !fetching) {
    prevButton?.classList.remove('prev-display');
  } else {
    prevButton?.classList.add('prev-display');
  }

  if (next != null && !fetching) {
    nextButton?.classList.remove('next-display');
  } else {
    nextButton?.classList.add('next-display');
  }

  let onClickPrev = () => {
    getMeTheData(prev);
  };

  let onClickNext = () => {
    getMeTheData(next);
  };

  return (
    <div className="page-button-grid">
      <div className="page-button-container">
        <div
          id="prev"
          className="prev-button prev-display"
          onClick={onClickPrev}
        >
          <h2>Prev</h2>
        </div>
        <div
          id="next"
          className="next-button next-display"
          onClick={onClickNext}
        >
          <h2>Next</h2>
        </div>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {
    fetching: state.characters.fetching,
    error: state.characters.error,
    prev: state.characters.prev,
    next: state.characters.next,
    input: state.characters.input,
  };
}

export default connect(mapState, { getMeTheData })(PageButton);
