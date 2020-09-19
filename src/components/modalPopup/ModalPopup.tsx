// REACT ──────────────────────────────────────────────────────────
import React from 'react';

// REDUX ──────────────────────────────────────────────────────────
import { connect } from 'react-redux';
import { changeModalStatus } from '../../redux/modalDuck';

// STYLES & COMPONENTS ────────────────────────────────────────────
import CharsModal from '../charsModal';
import Modal from 'react-modal';
import LocatEpisModal from '../locatEpisModal';
import './modalPopup.css';

interface Props {
  modalStatus?: any;
  changeModalStatus?: any;
  actualObject?: any;
}

Modal.setAppElement('#root');

let ModalPopup = ({ modalStatus, changeModalStatus, actualObject }: Props) => {
  // INITIALIZING CONSTS ────────────────────────────────────────────
  let { dimension, episode } = actualObject;
  // ──> end <──

  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={() => changeModalStatus()}
      className="overlay modal-content"
      style={{
        overlay: {
          backgroundColor: 'rgba(113, 80, 145, 0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <div className="modal-container">
        {dimension || episode ? <LocatEpisModal /> : <CharsModal />}
      </div>
    </Modal>
  );
};

function mapState(state: any) {
  return {
    modalStatus: state.modalStatus.open,
    actualObject: state.modalStatus.data,
  };
}

export default connect(mapState, { changeModalStatus })(ModalPopup);
