// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';

// STYLES ─────────────────────────────────────────────────────────
import '../modalPopup/modalPopup.css';

interface Props {
  actualObject?: any;
}

let CharsModal = ({ actualObject }: Props) => {
  let { name, image, species, gender, type } = actualObject;
  let unknown = 'unknown';
  return (
    <div className="modal-container">
      <div className="modal-image-container">
        <img className="modal-image" src={image} alt="from-api" />
      </div>
      <div className="modal-text">
        <h2 className="modal-name-text">{name}</h2>
      </div>
      <div className="data-cont">
        <div className="centered-data-cont">
          <div className="modal-text margin-bottom-phone pad-left">
            <h2 className="modal-title">Type</h2>
            <h2 className="center-text type">{type ? type : unknown}</h2>
          </div>
          <div className="modal-text margin-bottom-slighty pad-left">
            <h2 className="modal-title">Gender</h2>
            <h2 className="center-text genre">{gender ? gender : unknown}</h2>
          </div>
          <div className="modal-text pad-left">
            <h2 className="modal-title">Species</h2>
            <h2 className="center-text species">
              {species ? species : unknown}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapState(state: any) {
  return {
    actualObject: state.modalStatus.data,
  };
}
export default connect(mapState)(CharsModal);
