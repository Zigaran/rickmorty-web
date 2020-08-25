import React from 'react';
import './itemData.css';
import { changeModalStatus } from '../../redux/modalDuck';
import { connect } from 'react-redux';

interface Props {
  name?: string;
  image?: string;
  dimension?: string;
  episode?: string;
  id?: any;
  changeModalStatus?: any;
}

let ItemData = ({
  name,
  image,
  dimension,
  episode,
  id,
  changeModalStatus,
}: Props) => {
  let ID = id;
  return (
    <div key={ID} onClick={() => changeModalStatus()}>
      {console.log(ID)}
      {image ? (
        <div className="item-data">
          <img src={image} className="image" alt="pic-from-api" />
          <div className="item-text">
            <h4 className="text-h4">{name}</h4>
          </div>
        </div>
      ) : (
        <div className="locat-epi-container">
          <div>
            <h4 className="title-data">Name</h4>
            <h4 className="text-locat-epi">{name}</h4>
          </div>
          {dimension ? (
            <div>
              <h4 className="title-data">Dimension</h4>
              <h4 className="text-locat-epi">{dimension}</h4>
            </div>
          ) : (
            <div>
              <h4 className="title-data">Episode</h4>
              <h4 className="text-locat-epi">{episode}</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function mapState(state: any) {
  return {};
}

export default connect(mapState, { changeModalStatus })(ItemData);
