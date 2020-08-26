import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { changeModalStatus } from '../../redux/modalDuck';
import './modalPopup.css';

Modal.setAppElement('#root');

interface Props {
  modalStatus?: any;
  changeModalStatus?: any;
  actualObject?: any;
}

let ModalPopup = ({ modalStatus, changeModalStatus, actualObject }: Props) => {
  let { name, image, species, gender, type } = actualObject;
  let unknown = 'unknown';
  return (
    <Modal
      isOpen={modalStatus}
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
        <div className="close-modal-button">
          <i
            className="far fa-times-circle close-button"
            onClick={() => changeModalStatus()}
          />
        </div>
        <div className="modal-image-container">
          <img className="modal-image" src={image} alt="from-api" />
        </div>
        <div className="modal-text">
          <h2 className="modal-name-text">{name}</h2>
        </div>
        <div className="data-cont">
          <div className="modal-text pad-left">
            <h2 className="modal-title">Type</h2>
            <h2 className="center-text type">{type ? type : unknown}</h2>
          </div>
          <div className="modal-text pad-left">
            <h2 className="modal-title">Gender</h2>
            <h2 className="center-text genre">{gender ? gender : unknown}</h2>
          </div>
          <div className="modal-text pad-left">
            <h2 className="modal-title">Specie</h2>
            <h2 className="center-text species">
              {species ? species : unknown}
            </h2>
          </div>
        </div>
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
