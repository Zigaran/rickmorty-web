// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// STYLES ─────────────────────────────────────────────────────────
import './modalItemGrid.css';

interface Props {
  image: string;
  name: string;
}

let ModalItemGrid = ({ image, name }: Props) => {
  return (
    <div className="modal-item-grid">
      <img className="modal-item-image" src={image} alt="modal"></img>
      <h2 className="modal-item-name">{name}</h2>
    </div>
  );
};

export default ModalItemGrid;
