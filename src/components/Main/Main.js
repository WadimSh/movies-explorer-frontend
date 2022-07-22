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

  //const currentViewportWidth = document.documentElement.clientWidth;
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  }
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <main className="main">
      <Promo
        onScroll={scroll}
        onHeight={currentViewportHeight}
      >
        <NavTab />
      </Promo>
      <AboutProject
        onHeight={currentViewportHeight}
      />
      <Techs
        onScroll={scroll}
        onHeight={currentViewportHeight}
      />
      <AboutMe
        onScroll={scroll}
        onHeight={currentViewportHeight}
      />
      <Portfolio
        
      />
    </main>
  )
}

export default Main;
