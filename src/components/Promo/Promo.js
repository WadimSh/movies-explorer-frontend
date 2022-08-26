import React  from 'react';

import './Promo.css';

function Promo(props) {
       
  return (
    <section className="promo">
      <div className="promo__container">
      <div className="words word-1">
        <span>M</span>
        <span>O</span>
        <span>V</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
      </div>
      <div className="words word-2">
        <span>E</span>
        <span>X</span>
        <span>P</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
        <span>R</span>
      </div>
        {props.children}
      </div>
    </section>
  )
}

export default Promo;
