import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

import './Main.css';

function Main({ onScroll }) {

  return (
    <main className="main">
      <Promo
        onScroll={onScroll}
      >
        <NavTab />
      </Promo>
      <AboutProject
        onScroll={onScroll}
      />
      <Techs
        onScroll={onScroll}
      />
      <AboutMe
        onScroll={onScroll}
      />
      <Portfolio
        
      />
    </main>
  )
}

export default Main;
