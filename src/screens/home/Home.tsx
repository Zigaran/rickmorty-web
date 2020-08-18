import React from 'react';
import './Home.css';
import { Searcher, Filter } from '../../components';

let Home = () => {
  return (
    <div className="home">
      <Filter />
      <div className="home-content">
        <Searcher />
      </div>
    </div>
  );
};

export default Home;
