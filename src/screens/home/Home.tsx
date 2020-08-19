import React, { useState } from 'react';
import './home.css';
import { Searcher, Filter, MenuButton } from '../../components';

let Home = () => {
  let [active, setActive] = useState(false);
  return (
    <div className="home">
      <Filter active={active} />
      <div className="home-content">
        <MenuButton
          onClick={() => {
            setActive(!active);
            console.log(active);
          }}
        />
        <Searcher />
      </div>
    </div>
  );
};

export default Home;
