import React from 'react';
import './home.css';
import { Searcher, Filter } from '../../components';

let Home = () => {
  return (
    <div className="home">
      <Filter />
      <div className="home-content">
        <h4 style={{ color: 'white' }}>ASDASDASD</h4>
        <Searcher />
      </div>
    </div>
  );
};

export default Home;
