import React from 'react';
import './itemData.css';

interface Props {
  name?: string;
  image?: string;
}

let ItemData = ({ name, image }: Props) => {
  return (
    <div className="item-data">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        className="image"
        alt="pic-from-api"
      />
      <div className="item-text">
        <h4 className="text-h4">Morty Smith</h4>
      </div>
    </div>
  );
};

export default ItemData;
