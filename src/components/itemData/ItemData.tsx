import React from 'react';
import './itemData.css';

interface Props {
  name?: string;
  image?: string;
}

let ItemData = ({ name, image }: Props) => {
  return (
    <div className="item-data">
      <img src={image} className="image" alt="pic-from-api" />
      <div className="item-text">
        <h4 className="text-h4">{name}</h4>
      </div>
    </div>
  );
};

export default ItemData;
