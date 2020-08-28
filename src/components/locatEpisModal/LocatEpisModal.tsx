import React from 'react';
import { connect } from 'react-redux';
import ModalItemGrid from '../modalItemGrid';
import '../modalPopup/modalPopup.css';

interface Props {
  actualObject?: any;
}

let LocatEpisModal = ({ actualObject }: Props) => {
  // INITIALIZING CONSTS
  let { name, type, dimension, episode, air_date } = actualObject;
  let firstFiveResidents: any;
  let firstFiveCharacters: any;
  let FiveRes: any;
  let FiveChars: any;
  // ---> ENDS INITIALIZING <---

  // IF LOCATIONS OR EPISODES COMES FROM QUERY, THIS SECCION WILL CONTROLS THEM
  // THIS SECCION TOOKS FIRST FIVE CHARACTERS OR RESIDENTS.
  actualObject.residents
    ? (firstFiveResidents = actualObject.residents.slice(0, 5))
    : (firstFiveResidents = false);
  actualObject.characters
    ? (firstFiveCharacters = actualObject.characters.slice(0, 5))
    : (firstFiveCharacters = false);
  // ---> ENDS CONTROL SECCION <---

  // MAPING 5 FIRST RESIDENTS/CHARACTERS DATA
  firstFiveResidents
    ? (FiveRes = firstFiveResidents.map((fiveChars: any) => (
        <ModalItemGrid name={fiveChars.name} image={fiveChars.image} />
      )))
    : (FiveRes = null);

  firstFiveCharacters
    ? (FiveChars = firstFiveCharacters.map((fiveChars: any) => (
        <ModalItemGrid name={fiveChars.name} image={fiveChars.image} />
      )))
    : (FiveChars = null);
  // ---> ENDS MAPING DATA <---

  return (
    <div>
      <div className="loc-ep-name">
        <h2 className="responsive-margin text-decoration modal-name-text">
          Name
        </h2>
        <h2 className="responsive-margin center-text">{name}</h2>
      </div>

      <div className="loc-ep-name">
        <h2 className="responsive-margin text-decoration modal-name-text">
          {dimension ? 'Type' : 'Release date'}
        </h2>
        <h2 className="responsive-margin center-text">
          {dimension ? type : air_date}
        </h2>
      </div>

      <div className="loc-ep-name">
        <h2 className="responsive-margin text-decoration modal-name-text">
          {dimension ? 'Dimension' : 'Episode'}
        </h2>
        <h2 className="responsive-margin center-text">
          {dimension ? dimension : episode}
        </h2>
      </div>

      <h2 className="responsive-margin text-decoration modal-name-text">
        {dimension ? 'First 5 Residents' : 'First 5 Characters'}
      </h2>

      {dimension ? (
        actualObject.residents[0].name ? (
          <div className="chars-residents-grid">{FiveRes}</div>
        ) : (
          <div className="alert-no-residents">
            <h2 className="alert-text">NO RESIDENTS ON THIS LOCATIONS</h2>
          </div>
        )
      ) : actualObject.characters[0].name ? (
        <div className="chars-residents-grid">{FiveChars}</div>
      ) : (
        <div className="alert-no-residents">
          <h2 className="alert-text">NO CHARACTERS ON THIS EPISODE</h2>
        </div>
      )}
    </div>
  );
};

function mapState(state: any) {
  return {
    actualObject: state.modalStatus.data,
  };
}

export default connect(mapState)(LocatEpisModal);
