import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

import './Main.css';

function Main() {
  const currentViewportHeight = document.documentElement.clientHeight;

  return (
    <main className="main">
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject
        onHeight={currentViewportHeight}
      />
      <Techs
        onHeight={currentViewportHeight}
      />
      <AboutMe
        onHeight={currentViewportHeight}
      />
      <Portfolio
        
      />
    </main>
  )
}

export default Main;
